# PropertyUpdateParameters

Property update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PropertyUpdateParameterProperties**](PropertyUpdateParameterProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_update_parameters import PropertyUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyUpdateParameters from a JSON string
property_update_parameters_instance = PropertyUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(PropertyUpdateParameters.to_json())

# convert the object into a dict
property_update_parameters_dict = property_update_parameters_instance.to_dict()
# create an instance of PropertyUpdateParameters from a dict
property_update_parameters_from_dict = PropertyUpdateParameters.from_dict(property_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


