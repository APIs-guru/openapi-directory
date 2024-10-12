# ManagedHostingEnvironmentCollection

Collection of managed hosting environments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[ManagedHostingEnvironment]**](ManagedHostingEnvironment.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.managed_hosting_environment_collection import ManagedHostingEnvironmentCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedHostingEnvironmentCollection from a JSON string
managed_hosting_environment_collection_instance = ManagedHostingEnvironmentCollection.from_json(json)
# print the JSON string representation of the object
print(ManagedHostingEnvironmentCollection.to_json())

# convert the object into a dict
managed_hosting_environment_collection_dict = managed_hosting_environment_collection_instance.to_dict()
# create an instance of ManagedHostingEnvironmentCollection from a dict
managed_hosting_environment_collection_from_dict = ManagedHostingEnvironmentCollection.from_dict(managed_hosting_environment_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


