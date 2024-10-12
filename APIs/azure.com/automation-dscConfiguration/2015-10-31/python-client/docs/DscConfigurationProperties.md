# DscConfigurationProperties

Definition of the configuration property type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time. | [optional] 
**description** | **str** | Gets or sets the description. | [optional] 
**job_count** | **int** | Gets or sets the job count of the configuration. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 
**log_verbose** | **bool** | Gets or sets verbose log option. | [optional] 
**node_configuration_count** | **int** | Gets the number of compiled node configurations. | [optional] 
**parameters** | [**Dict[str, DscConfigurationParameter]**](DscConfigurationParameter.md) | Gets or sets the configuration parameters. | [optional] 
**provisioning_state** | **str** | Gets or sets the provisioning state of the configuration. | [optional] 
**source** | [**ContentSource**](ContentSource.md) |  | [optional] 
**state** | **str** | Gets or sets the state of the configuration. | [optional] 

## Example

```python
from openapi_client.models.dsc_configuration_properties import DscConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DscConfigurationProperties from a JSON string
dsc_configuration_properties_instance = DscConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(DscConfigurationProperties.to_json())

# convert the object into a dict
dsc_configuration_properties_dict = dsc_configuration_properties_instance.to_dict()
# create an instance of DscConfigurationProperties from a dict
dsc_configuration_properties_from_dict = DscConfigurationProperties.from_dict(dsc_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


