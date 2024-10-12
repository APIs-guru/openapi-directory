# DeletedSiteCollection

Collection of deleted sites

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[DeletedSite]**](DeletedSite.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.deleted_site_collection import DeletedSiteCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedSiteCollection from a JSON string
deleted_site_collection_instance = DeletedSiteCollection.from_json(json)
# print the JSON string representation of the object
print(DeletedSiteCollection.to_json())

# convert the object into a dict
deleted_site_collection_dict = deleted_site_collection_instance.to_dict()
# create an instance of DeletedSiteCollection from a dict
deleted_site_collection_from_dict = DeletedSiteCollection.from_dict(deleted_site_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


