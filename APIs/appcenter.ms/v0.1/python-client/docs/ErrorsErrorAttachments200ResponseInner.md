# ErrorsErrorAttachments200ResponseInner


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
from openapi_client.models.errors_error_attachments200_response_inner import ErrorsErrorAttachments200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsErrorAttachments200ResponseInner from a JSON string
errors_error_attachments200_response_inner_instance = ErrorsErrorAttachments200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ErrorsErrorAttachments200ResponseInner.to_json())

# convert the object into a dict
errors_error_attachments200_response_inner_dict = errors_error_attachments200_response_inner_instance.to_dict()
# create an instance of ErrorsErrorAttachments200ResponseInner from a dict
errors_error_attachments200_response_inner_from_dict = ErrorsErrorAttachments200ResponseInner.from_dict(errors_error_attachments200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


