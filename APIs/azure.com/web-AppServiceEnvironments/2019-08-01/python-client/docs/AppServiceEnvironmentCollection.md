# AppServiceEnvironmentCollection

Collection of App Service Environments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[AppServiceEnvironmentResource]**](AppServiceEnvironmentResource.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.app_service_environment_collection import AppServiceEnvironmentCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentCollection from a JSON string
app_service_environment_collection_instance = AppServiceEnvironmentCollection.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentCollection.to_json())

# convert the object into a dict
app_service_environment_collection_dict = app_service_environment_collection_instance.to_dict()
# create an instance of AppServiceEnvironmentCollection from a dict
app_service_environment_collection_from_dict = AppServiceEnvironmentCollection.from_dict(app_service_environment_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


