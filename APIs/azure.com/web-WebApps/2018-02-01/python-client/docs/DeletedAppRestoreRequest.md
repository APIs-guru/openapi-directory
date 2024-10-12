# DeletedAppRestoreRequest

Details about restoring a deleted app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | DeletedAppRestoreRequest resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_app_restore_request import DeletedAppRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedAppRestoreRequest from a JSON string
deleted_app_restore_request_instance = DeletedAppRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(DeletedAppRestoreRequest.to_json())

# convert the object into a dict
deleted_app_restore_request_dict = deleted_app_restore_request_instance.to_dict()
# create an instance of DeletedAppRestoreRequest from a dict
deleted_app_restore_request_from_dict = DeletedAppRestoreRequest.from_dict(deleted_app_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


