# GlobalConfigurations

The list of global configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[GlobalConfiguration]**](GlobalConfiguration.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.global_configurations import GlobalConfigurations

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalConfigurations from a JSON string
global_configurations_instance = GlobalConfigurations.from_json(json)
# print the JSON string representation of the object
print(GlobalConfigurations.to_json())

# convert the object into a dict
global_configurations_dict = global_configurations_instance.to_dict()
# create an instance of GlobalConfigurations from a dict
global_configurations_from_dict = GlobalConfigurations.from_dict(global_configurations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


