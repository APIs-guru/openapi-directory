# CostProperties

Properties of a cost item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**costs** | [**List[CostPerDayProperties]**](CostPerDayProperties.md) | The per-day costs items of the cost. | [optional] 
**currency_code** | **str** | The currency code of the cost. | [optional] 

## Example

```python
from openapi_client.models.cost_properties import CostProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CostProperties from a JSON string
cost_properties_instance = CostProperties.from_json(json)
# print the JSON string representation of the object
print(CostProperties.to_json())

# convert the object into a dict
cost_properties_dict = cost_properties_instance.to_dict()
# create an instance of CostProperties from a dict
cost_properties_from_dict = CostProperties.from_dict(cost_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


