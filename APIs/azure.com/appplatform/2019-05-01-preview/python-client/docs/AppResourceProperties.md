# AppResourceProperties

App resource properties payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_deployment_name** | **str** | Name of the active deployment of the App | [optional] 
**created_time** | **datetime** | Date time when the resource is created | [optional] [readonly] 
**persistent_disk** | [**PersistentDisk**](PersistentDisk.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the App | [optional] [readonly] 
**public** | **bool** | Indicates whether the App exposes public endpoint | [optional] 
**temporary_disk** | [**TemporaryDisk**](TemporaryDisk.md) |  | [optional] 
**url** | **str** | URL of the App | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_resource_properties import AppResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppResourceProperties from a JSON string
app_resource_properties_instance = AppResourceProperties.from_json(json)
# print the JSON string representation of the object
print(AppResourceProperties.to_json())

# convert the object into a dict
app_resource_properties_dict = app_resource_properties_instance.to_dict()
# create an instance of AppResourceProperties from a dict
app_resource_properties_from_dict = AppResourceProperties.from_dict(app_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


