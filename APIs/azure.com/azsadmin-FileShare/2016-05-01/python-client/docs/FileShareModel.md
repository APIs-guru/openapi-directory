# FileShareModel

Properties of a file share resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_volume** | **str** | Associated volume ID. | [optional] 
**unc_path** | **str** | The UNCPath for the fileshare. | [optional] 

## Example

```python
from openapi_client.models.file_share_model import FileShareModel

# TODO update the JSON string below
json = "{}"
# create an instance of FileShareModel from a JSON string
file_share_model_instance = FileShareModel.from_json(json)
# print the JSON string representation of the object
print(FileShareModel.to_json())

# convert the object into a dict
file_share_model_dict = file_share_model_instance.to_dict()
# create an instance of FileShareModel from a dict
file_share_model_from_dict = FileShareModel.from_dict(file_share_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


