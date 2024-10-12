# AssetMaster

An object containing the current status of Master Access and the link to the Master MP4 file when ready. This object does not exist if `master_acess` is set to `none` and when the temporary URL expires.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 
**url** | **str** | The temporary URL to the master version of the video, as an MP4 file. This URL will expire after 24 hours. | [optional] 

## Example

```python
from openapi_client.models.asset_master import AssetMaster

# TODO update the JSON string below
json = "{}"
# create an instance of AssetMaster from a JSON string
asset_master_instance = AssetMaster.from_json(json)
# print the JSON string representation of the object
print(AssetMaster.to_json())

# convert the object into a dict
asset_master_dict = asset_master_instance.to_dict()
# create an instance of AssetMaster from a dict
asset_master_from_dict = AssetMaster.from_dict(asset_master_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


