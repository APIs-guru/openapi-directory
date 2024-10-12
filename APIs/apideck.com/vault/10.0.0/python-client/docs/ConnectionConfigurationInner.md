# ConnectionConfigurationInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaults** | [**List[ConnectionConfigurationInnerDefaultsInner]**](ConnectionConfigurationInnerDefaultsInner.md) |  | [optional] 
**resource** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.connection_configuration_inner import ConnectionConfigurationInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionConfigurationInner from a JSON string
connection_configuration_inner_instance = ConnectionConfigurationInner.from_json(json)
# print the JSON string representation of the object
print(ConnectionConfigurationInner.to_json())

# convert the object into a dict
connection_configuration_inner_dict = connection_configuration_inner_instance.to_dict()
# create an instance of ConnectionConfigurationInner from a dict
connection_configuration_inner_from_dict = ConnectionConfigurationInner.from_dict(connection_configuration_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


