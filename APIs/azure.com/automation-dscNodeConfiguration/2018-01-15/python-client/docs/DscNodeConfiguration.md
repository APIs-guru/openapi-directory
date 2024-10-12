# DscNodeConfiguration

Definition of the dsc node configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DscNodeConfigurationProperties**](DscNodeConfigurationProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dsc_node_configuration import DscNodeConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeConfiguration from a JSON string
dsc_node_configuration_instance = DscNodeConfiguration.from_json(json)
# print the JSON string representation of the object
print(DscNodeConfiguration.to_json())

# convert the object into a dict
dsc_node_configuration_dict = dsc_node_configuration_instance.to_dict()
# create an instance of DscNodeConfiguration from a dict
dsc_node_configuration_from_dict = DscNodeConfiguration.from_dict(dsc_node_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


