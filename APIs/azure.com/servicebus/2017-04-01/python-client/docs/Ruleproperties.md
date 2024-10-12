# Ruleproperties

Description of Rule Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**Action**](Action.md) |  | [optional] 
**correlation_filter** | [**CorrelationFilter**](CorrelationFilter.md) |  | [optional] 
**filter_type** | [**FilterType**](FilterType.md) |  | [optional] 
**sql_filter** | [**SqlFilter**](SqlFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.ruleproperties import Ruleproperties

# TODO update the JSON string below
json = "{}"
# create an instance of Ruleproperties from a JSON string
ruleproperties_instance = Ruleproperties.from_json(json)
# print the JSON string representation of the object
print(Ruleproperties.to_json())

# convert the object into a dict
ruleproperties_dict = ruleproperties_instance.to_dict()
# create an instance of Ruleproperties from a dict
ruleproperties_from_dict = Ruleproperties.from_dict(ruleproperties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


