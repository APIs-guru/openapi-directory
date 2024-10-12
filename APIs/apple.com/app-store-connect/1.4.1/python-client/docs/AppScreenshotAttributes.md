# AppScreenshotAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_delivery_state** | [**AppMediaAssetState**](AppMediaAssetState.md) |  | [optional] 
**asset_token** | **str** |  | [optional] 
**asset_type** | **str** |  | [optional] 
**file_name** | **str** |  | [optional] 
**file_size** | **int** |  | [optional] 
**image_asset** | [**ImageAsset**](ImageAsset.md) |  | [optional] 
**source_file_checksum** | **str** |  | [optional] 
**upload_operations** | [**List[UploadOperation]**](UploadOperation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_screenshot_attributes import AppScreenshotAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppScreenshotAttributes from a JSON string
app_screenshot_attributes_instance = AppScreenshotAttributes.from_json(json)
# print the JSON string representation of the object
print(AppScreenshotAttributes.to_json())

# convert the object into a dict
app_screenshot_attributes_dict = app_screenshot_attributes_instance.to_dict()
# create an instance of AppScreenshotAttributes from a dict
app_screenshot_attributes_from_dict = AppScreenshotAttributes.from_dict(app_screenshot_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


