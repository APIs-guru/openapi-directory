# DeletedWebAppCollectionValueInner

A deleted app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties**](DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.deleted_web_app_collection_value_inner import DeletedWebAppCollectionValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedWebAppCollectionValueInner from a JSON string
deleted_web_app_collection_value_inner_instance = DeletedWebAppCollectionValueInner.from_json(json)
# print the JSON string representation of the object
print(DeletedWebAppCollectionValueInner.to_json())

# convert the object into a dict
deleted_web_app_collection_value_inner_dict = deleted_web_app_collection_value_inner_instance.to_dict()
# create an instance of DeletedWebAppCollectionValueInner from a dict
deleted_web_app_collection_value_inner_from_dict = DeletedWebAppCollectionValueInner.from_dict(deleted_web_app_collection_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


