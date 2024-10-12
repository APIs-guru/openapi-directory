# UploadPresign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**UploadPresignFields**](UploadPresignFields.md) |  | 
**headers** | **object** |  | 
**method** | **str** |  | [optional] 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.upload_presign import UploadPresign

# TODO update the JSON string below
json = "{}"
# create an instance of UploadPresign from a JSON string
upload_presign_instance = UploadPresign.from_json(json)
# print the JSON string representation of the object
print(UploadPresign.to_json())

# convert the object into a dict
upload_presign_dict = upload_presign_instance.to_dict()
# create an instance of UploadPresign from a dict
upload_presign_from_dict = UploadPresign.from_dict(upload_presign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


