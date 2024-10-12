# CrashAttachment


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
from openapi_client.models.crash_attachment import CrashAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of CrashAttachment from a JSON string
crash_attachment_instance = CrashAttachment.from_json(json)
# print the JSON string representation of the object
print(CrashAttachment.to_json())

# convert the object into a dict
crash_attachment_dict = crash_attachment_instance.to_dict()
# create an instance of CrashAttachment from a dict
crash_attachment_from_dict = CrashAttachment.from_dict(crash_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


