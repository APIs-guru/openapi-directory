# FileAsset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**token** | **str** |  | [optional] 
**upload_domain** | **str** |  | [optional] 
**upload_window_location** | **str** |  | [optional] 
**url_encoded_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.file_asset import FileAsset

# TODO update the JSON string below
json = "{}"
# create an instance of FileAsset from a JSON string
file_asset_instance = FileAsset.from_json(json)
# print the JSON string representation of the object
print(FileAsset.to_json())

# convert the object into a dict
file_asset_dict = file_asset_instance.to_dict()
# create an instance of FileAsset from a dict
file_asset_from_dict = FileAsset.from_dict(file_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


