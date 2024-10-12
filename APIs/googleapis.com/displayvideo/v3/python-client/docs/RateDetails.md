# RateDetails

The rate related settings of the inventory source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_source_rate_type** | **str** | The rate type. Acceptable values are &#x60;INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED&#x60;, &#x60;INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR&#x60;, and &#x60;INVENTORY_SOURCE_RATE_TYPE_CPD&#x60;. | [optional] 
**minimum_spend** | [**Money**](Money.md) |  | [optional] 
**rate** | [**Money**](Money.md) |  | [optional] 
**units_purchased** | **str** | Required for guaranteed inventory sources. The number of impressions guaranteed by the seller. | [optional] 

## Example

```python
from openapi_client.models.rate_details import RateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RateDetails from a JSON string
rate_details_instance = RateDetails.from_json(json)
# print the JSON string representation of the object
print(RateDetails.to_json())

# convert the object into a dict
rate_details_dict = rate_details_instance.to_dict()
# create an instance of RateDetails from a dict
rate_details_from_dict = RateDetails.from_dict(rate_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


