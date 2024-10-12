# ConnectionConfigurationInnerDefaultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**options** | [**List[FormFieldOption]**](FormFieldOption.md) |  | [optional] 
**target** | **str** |  | [optional] [readonly] 
**value** | [**ConnectionConfigurationInnerDefaultsInnerValue**](ConnectionConfigurationInnerDefaultsInnerValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_configuration_inner_defaults_inner import ConnectionConfigurationInnerDefaultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionConfigurationInnerDefaultsInner from a JSON string
connection_configuration_inner_defaults_inner_instance = ConnectionConfigurationInnerDefaultsInner.from_json(json)
# print the JSON string representation of the object
print(ConnectionConfigurationInnerDefaultsInner.to_json())

# convert the object into a dict
connection_configuration_inner_defaults_inner_dict = connection_configuration_inner_defaults_inner_instance.to_dict()
# create an instance of ConnectionConfigurationInnerDefaultsInner from a dict
connection_configuration_inner_defaults_inner_from_dict = ConnectionConfigurationInnerDefaultsInner.from_dict(connection_configuration_inner_defaults_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


