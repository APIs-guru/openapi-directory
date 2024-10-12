# CrashesDelete200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | [optional] 
**attachments_deleted** | **int** |  | [optional] 
**blobs_failed** | **int** |  | [optional] 
**blobs_succeeded** | **int** |  | [optional] 
**crash_group_id** | **str** |  | [optional] 
**crash_id** | **str** |  | [optional] 
**crashes_deleted** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.crashes_delete200_response import CrashesDelete200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CrashesDelete200Response from a JSON string
crashes_delete200_response_instance = CrashesDelete200Response.from_json(json)
# print the JSON string representation of the object
print(CrashesDelete200Response.to_json())

# convert the object into a dict
crashes_delete200_response_dict = crashes_delete200_response_instance.to_dict()
# create an instance of CrashesDelete200Response from a dict
crashes_delete200_response_from_dict = CrashesDelete200Response.from_dict(crashes_delete200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


