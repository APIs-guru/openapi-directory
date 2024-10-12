# FileAssetsCreate200Response


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
from openapi_client.models.file_assets_create200_response import FileAssetsCreate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of FileAssetsCreate200Response from a JSON string
file_assets_create200_response_instance = FileAssetsCreate200Response.from_json(json)
# print the JSON string representation of the object
print(FileAssetsCreate200Response.to_json())

# convert the object into a dict
file_assets_create200_response_dict = file_assets_create200_response_instance.to_dict()
# create an instance of FileAssetsCreate200Response from a dict
file_assets_create200_response_from_dict = FileAssetsCreate200Response.from_dict(file_assets_create200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


