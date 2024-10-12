# UploadError

Only set if an error occurred during asset creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Human readable error message | [optional] 
**type** | **str** | Label for the specific error | [optional] 

## Example

```python
from openapi_client.models.upload_error import UploadError

# TODO update the JSON string below
json = "{}"
# create an instance of UploadError from a JSON string
upload_error_instance = UploadError.from_json(json)
# print the JSON string representation of the object
print(UploadError.to_json())

# convert the object into a dict
upload_error_dict = upload_error_instance.to_dict()
# create an instance of UploadError from a dict
upload_error_from_dict = UploadError.from_dict(upload_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


