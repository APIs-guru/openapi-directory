# PrivateUpdateUploadDetails

Details of the upload to patch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Message of the error | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.private_update_upload_details import PrivateUpdateUploadDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateUpdateUploadDetails from a JSON string
private_update_upload_details_instance = PrivateUpdateUploadDetails.from_json(json)
# print the JSON string representation of the object
print(PrivateUpdateUploadDetails.to_json())

# convert the object into a dict
private_update_upload_details_dict = private_update_upload_details_instance.to_dict()
# create an instance of PrivateUpdateUploadDetails from a dict
private_update_upload_details_from_dict = PrivateUpdateUploadDetails.from_dict(private_update_upload_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


