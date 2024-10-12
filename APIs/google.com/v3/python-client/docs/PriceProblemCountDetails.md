# PriceProblemCountDetails

The reasons that contributed to the price problem count and the total count for each reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hotel_suspended_count** | **str** | The hotel was suspended. This may be due to persistent problems in areas such as incorrect taxes and fees. | [optional] 
**price_unusually_high_count** | **str** | The price given for this itinerary seemed oddly high compared to regional trends. | [optional] 
**price_unusually_low_count** | **str** | The price given for this itinerary seemed oddly low compared to regional trends. | [optional] 
**taxes_and_fees_missing_count** | **str** | Taxes and fees were missing from pricing. | [optional] 

## Example

```python
from openapi_client.models.price_problem_count_details import PriceProblemCountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PriceProblemCountDetails from a JSON string
price_problem_count_details_instance = PriceProblemCountDetails.from_json(json)
# print the JSON string representation of the object
print(PriceProblemCountDetails.to_json())

# convert the object into a dict
price_problem_count_details_dict = price_problem_count_details_instance.to_dict()
# create an instance of PriceProblemCountDetails from a dict
price_problem_count_details_from_dict = PriceProblemCountDetails.from_dict(price_problem_count_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


