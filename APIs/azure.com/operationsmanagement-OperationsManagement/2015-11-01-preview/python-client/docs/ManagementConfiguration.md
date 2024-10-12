# ManagementConfiguration

The container for solution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**properties** | [**ManagementConfigurationProperties**](ManagementConfigurationProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_configuration import ManagementConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementConfiguration from a JSON string
management_configuration_instance = ManagementConfiguration.from_json(json)
# print the JSON string representation of the object
print(ManagementConfiguration.to_json())

# convert the object into a dict
management_configuration_dict = management_configuration_instance.to_dict()
# create an instance of ManagementConfiguration from a dict
management_configuration_from_dict = ManagementConfiguration.from_dict(management_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


