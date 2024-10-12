# ErrorAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | [optional] 
**attachment_id** | **str** |  | [optional] 
**blob_location** | **str** |  | [optional] 
**content_type** | **str** |  | [optional] 
**crash_id** | **str** |  | [optional] 
**created_time** | **datetime** |  | [optional] 
**file_name** | **str** |  | [optional] 
**size** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.error_attachment import ErrorAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorAttachment from a JSON string
error_attachment_instance = ErrorAttachment.from_json(json)
# print the JSON string representation of the object
print(ErrorAttachment.to_json())

# convert the object into a dict
error_attachment_dict = error_attachment_instance.to_dict()
# create an instance of ErrorAttachment from a dict
error_attachment_from_dict = ErrorAttachment.from_dict(error_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


