# HostingEnvironmentCollection

Collection of hosting environments (App Service Environments)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[HostingEnvironment]**](HostingEnvironment.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.hosting_environment_collection import HostingEnvironmentCollection

# TODO update the JSON string below
json = "{}"
# create an instance of HostingEnvironmentCollection from a JSON string
hosting_environment_collection_instance = HostingEnvironmentCollection.from_json(json)
# print the JSON string representation of the object
print(HostingEnvironmentCollection.to_json())

# convert the object into a dict
hosting_environment_collection_dict = hosting_environment_collection_instance.to_dict()
# create an instance of HostingEnvironmentCollection from a dict
hosting_environment_collection_from_dict = HostingEnvironmentCollection.from_dict(hosting_environment_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


