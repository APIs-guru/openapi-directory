# ListFinalizedDealsResponse

Response message for listing finalized deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finalized_deals** | [**List[FinalizedDeal]**](FinalizedDeal.md) | The list of finalized deals. | [optional] 
**next_page_token** | **str** | Token to fetch the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_finalized_deals_response import ListFinalizedDealsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFinalizedDealsResponse from a JSON string
list_finalized_deals_response_instance = ListFinalizedDealsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFinalizedDealsResponse.to_json())

# convert the object into a dict
list_finalized_deals_response_dict = list_finalized_deals_response_instance.to_dict()
# create an instance of ListFinalizedDealsResponse from a dict
list_finalized_deals_response_from_dict = ListFinalizedDealsResponse.from_dict(list_finalized_deals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


