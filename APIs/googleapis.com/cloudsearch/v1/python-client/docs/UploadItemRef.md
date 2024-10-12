# UploadItemRef

Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the content reference. The maximum length is 2048 characters. | [optional] 

## Example

```python
from openapi_client.models.upload_item_ref import UploadItemRef

# TODO update the JSON string below
json = "{}"
# create an instance of UploadItemRef from a JSON string
upload_item_ref_instance = UploadItemRef.from_json(json)
# print the JSON string representation of the object
print(UploadItemRef.to_json())

# convert the object into a dict
upload_item_ref_dict = upload_item_ref_instance.to_dict()
# create an instance of UploadItemRef from a dict
upload_item_ref_from_dict = UploadItemRef.from_dict(upload_item_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


