# UploadPresignFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | 
**policy** | **str** |  | 
**x_amz_algorithm** | **str** |  | 
**x_amz_credential** | **str** |  | 
**x_amz_date** | **str** |  | 
**x_amz_signature** | **str** |  | 

## Example

```python
from openapi_client.models.upload_presign_fields import UploadPresignFields

# TODO update the JSON string below
json = "{}"
# create an instance of UploadPresignFields from a JSON string
upload_presign_fields_instance = UploadPresignFields.from_json(json)
# print the JSON string representation of the object
print(UploadPresignFields.to_json())

# convert the object into a dict
upload_presign_fields_dict = upload_presign_fields_instance.to_dict()
# create an instance of UploadPresignFields from a dict
upload_presign_fields_from_dict = UploadPresignFields.from_dict(upload_presign_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


