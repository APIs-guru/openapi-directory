# UploadParameterObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_access_key_id** | **str** |  | [optional] 
**content_type** | **str** |  | [optional] 
**policy** | **str** |  | [optional] 
**signature** | **str** |  | [optional] 
**acl** | **str** |  | [optional] 
**action** | **str** |  | [optional] 
**key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.upload_parameter_object import UploadParameterObject

# TODO update the JSON string below
json = "{}"
# create an instance of UploadParameterObject from a JSON string
upload_parameter_object_instance = UploadParameterObject.from_json(json)
# print the JSON string representation of the object
print(UploadParameterObject.to_json())

# convert the object into a dict
upload_parameter_object_dict = upload_parameter_object_instance.to_dict()
# create an instance of UploadParameterObject from a dict
upload_parameter_object_from_dict = UploadParameterObject.from_dict(upload_parameter_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


