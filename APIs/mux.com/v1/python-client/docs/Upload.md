# Upload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **str** | Only set once the upload is in the &#x60;asset_created&#x60; state. | [optional] 
**cors_origin** | **str** | If the upload URL will be used in a browser, you must specify the origin in order for the signed URL to have the correct CORS headers. | [optional] 
**error** | [**UploadError**](UploadError.md) |  | [optional] 
**id** | **str** | Unique identifier for the Direct Upload. | [optional] 
**new_asset_settings** | [**Asset**](Asset.md) |  | [optional] 
**status** | **str** |  | [optional] 
**test** | **bool** | Indicates if this is a test Direct Upload, in which case the Asset that gets created will be a &#x60;test&#x60; Asset. | [optional] 
**timeout** | **int** | Max time in seconds for the signed upload URL to be valid. If a successful upload has not occurred before the timeout limit, the direct upload is marked &#x60;timed_out&#x60; | [optional] [default to 3600]
**url** | **str** | The URL to upload the associated source media to. | [optional] 

## Example

```python
from openapi_client.models.upload import Upload

# TODO update the JSON string below
json = "{}"
# create an instance of Upload from a JSON string
upload_instance = Upload.from_json(json)
# print the JSON string representation of the object
print(Upload.to_json())

# convert the object into a dict
upload_dict = upload_instance.to_dict()
# create an instance of Upload from a dict
upload_from_dict = Upload.from_dict(upload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


