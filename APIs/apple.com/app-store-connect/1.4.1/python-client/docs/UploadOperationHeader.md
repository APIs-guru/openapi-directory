# UploadOperationHeader


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.upload_operation_header import UploadOperationHeader

# TODO update the JSON string below
json = "{}"
# create an instance of UploadOperationHeader from a JSON string
upload_operation_header_instance = UploadOperationHeader.from_json(json)
# print the JSON string representation of the object
print(UploadOperationHeader.to_json())

# convert the object into a dict
upload_operation_header_dict = upload_operation_header_instance.to_dict()
# create an instance of UploadOperationHeader from a dict
upload_operation_header_from_dict = UploadOperationHeader.from_dict(upload_operation_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


