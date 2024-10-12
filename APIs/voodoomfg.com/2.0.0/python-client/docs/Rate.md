# Rate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_date** | **str** | The target delivery date for the shipping method. Formatted as a datetime string. | [optional] 
**display_name** | **str** | The display name for this shipping service. | [optional] 
**guaranteed** | **bool** | Certain shipping methods have guaranteed delivery dates. This field indicates whether delivery_date is guaranteed or if it is just an estimate. | [optional] 
**price** | **float** | The price of this shipping option for the given set of items. | [optional] 
**service** | **str** | The identifier string for this shipping service. Use this value when creating an order with this as your requested shipping method. | [optional] 
**ship_date** | **str** | The target ship date for the shipping method. Formatted as a datetime string. | [optional] 
**value** | **str** | Reserved field. Do not use. | [optional] 

## Example

```python
from openapi_client.models.rate import Rate

# TODO update the JSON string below
json = "{}"
# create an instance of Rate from a JSON string
rate_instance = Rate.from_json(json)
# print the JSON string representation of the object
print(Rate.to_json())

# convert the object into a dict
rate_dict = rate_instance.to_dict()
# create an instance of Rate from a dict
rate_from_dict = Rate.from_dict(rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


