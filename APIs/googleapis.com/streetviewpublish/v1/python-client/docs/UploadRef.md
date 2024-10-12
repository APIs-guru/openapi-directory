# UploadRef

Upload reference for media files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_url** | **str** | An upload reference should be unique for each user. It follows the form: \&quot;https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}\&quot; | [optional] 

## Example

```python
from openapi_client.models.upload_ref import UploadRef

# TODO update the JSON string below
json = "{}"
# create an instance of UploadRef from a JSON string
upload_ref_instance = UploadRef.from_json(json)
# print the JSON string representation of the object
print(UploadRef.to_json())

# convert the object into a dict
upload_ref_dict = upload_ref_instance.to_dict()
# create an instance of UploadRef from a dict
upload_ref_from_dict = UploadRef.from_dict(upload_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


