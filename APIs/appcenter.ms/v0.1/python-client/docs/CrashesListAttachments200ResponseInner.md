# CrashesListAttachments200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | 
**attachment_id** | **str** |  | 
**blob_location** | **str** |  | 
**content_type** | **str** |  | 
**crash_id** | **str** |  | 
**created_time** | **datetime** |  | 
**file_name** | **str** |  | 
**size** | **float** |  | 

## Example

```python
from openapi_client.models.crashes_list_attachments200_response_inner import CrashesListAttachments200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of CrashesListAttachments200ResponseInner from a JSON string
crashes_list_attachments200_response_inner_instance = CrashesListAttachments200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(CrashesListAttachments200ResponseInner.to_json())

# convert the object into a dict
crashes_list_attachments200_response_inner_dict = crashes_list_attachments200_response_inner_instance.to_dict()
# create an instance of CrashesListAttachments200ResponseInner from a dict
crashes_list_attachments200_response_inner_from_dict = CrashesListAttachments200ResponseInner.from_dict(crashes_list_attachments200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


