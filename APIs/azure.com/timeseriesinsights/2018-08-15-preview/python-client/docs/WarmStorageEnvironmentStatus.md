# WarmStorageEnvironmentStatus

An object that represents the status of warm storage on an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties_usage** | [**WarmStoragePropertiesUsage**](WarmStoragePropertiesUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.warm_storage_environment_status import WarmStorageEnvironmentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WarmStorageEnvironmentStatus from a JSON string
warm_storage_environment_status_instance = WarmStorageEnvironmentStatus.from_json(json)
# print the JSON string representation of the object
print(WarmStorageEnvironmentStatus.to_json())

# convert the object into a dict
warm_storage_environment_status_dict = warm_storage_environment_status_instance.to_dict()
# create an instance of WarmStorageEnvironmentStatus from a dict
warm_storage_environment_status_from_dict = WarmStorageEnvironmentStatus.from_dict(warm_storage_environment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


