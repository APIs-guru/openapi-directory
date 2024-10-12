# DeletedWebAppCollection

Collection of deleted apps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[DeletedSite]**](DeletedSite.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.deleted_web_app_collection import DeletedWebAppCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedWebAppCollection from a JSON string
deleted_web_app_collection_instance = DeletedWebAppCollection.from_json(json)
# print the JSON string representation of the object
print(DeletedWebAppCollection.to_json())

# convert the object into a dict
deleted_web_app_collection_dict = deleted_web_app_collection_instance.to_dict()
# create an instance of DeletedWebAppCollection from a dict
deleted_web_app_collection_from_dict = DeletedWebAppCollection.from_dict(deleted_web_app_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


