# Value

The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_rate_name** | **str** | The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set. | [optional] 
**flat_rate** | [**Price**](Price.md) |  | [optional] 
**no_shipping** | **bool** | If true, then the product can&#39;t ship. Must be true when set, can only be set if all other fields are not set. | [optional] 
**price_percentage** | **str** | A percentage of the price represented as a number in decimal notation (for example, &#x60;\&quot;5.4\&quot;&#x60;). Can only be set if all other fields are not set. | [optional] 
**subtable_name** | **str** | The name of a subtable. Can only be set in table cells (not for single values), and only if all other fields are not set. | [optional] 

## Example

```python
from openapi_client.models.value import Value

# TODO update the JSON string below
json = "{}"
# create an instance of Value from a JSON string
value_instance = Value.from_json(json)
# print the JSON string representation of the object
print(Value.to_json())

# convert the object into a dict
value_dict = value_instance.to_dict()
# create an instance of Value from a dict
value_from_dict = Value.from_dict(value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


