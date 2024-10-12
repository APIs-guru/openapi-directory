# ComparisonResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_date** | **str** | Timestamp of when the comparison took place | 
**correlation_id** | **str** | The correlationId as passed in the request | 
**current_bill_data** | [**CurrentBillData**](CurrentBillData.md) |  | 
**default_offer** | [**DefaultOffer**](DefaultOffer.md) |  | 
**market_disclosure** | [**ComparisonResponseMarketDisclosure**](ComparisonResponseMarketDisclosure.md) |  | [optional] 
**maximum_saving** | **float** | What is the maximum saving that can be achieved if the user switches to a new plan. This number may be negative if the user is already on the best plan for their usage and no saving can be found. | 
**plans** | [**List[Plan]**](Plan.md) | Array of plans, sorted from best to worst saving, for the uploaded bill | 
**version** | **str** | Version of the API on which the comparison took place. This value should be reported with any issue raised. | 

## Example

```python
from openapi_client.models.comparison_response import ComparisonResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComparisonResponse from a JSON string
comparison_response_instance = ComparisonResponse.from_json(json)
# print the JSON string representation of the object
print(ComparisonResponse.to_json())

# convert the object into a dict
comparison_response_dict = comparison_response_instance.to_dict()
# create an instance of ComparisonResponse from a dict
comparison_response_from_dict = ComparisonResponse.from_dict(comparison_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


