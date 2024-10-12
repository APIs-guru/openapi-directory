# CreativeAssetId

Creative Asset ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: \&quot;.-_ \&quot;. Spaces are allowed. | [optional] 
**type** | **str** | Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE. | [optional] 

## Example

```python
from openapi_client.models.creative_asset_id import CreativeAssetId

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeAssetId from a JSON string
creative_asset_id_instance = CreativeAssetId.from_json(json)
# print the JSON string representation of the object
print(CreativeAssetId.to_json())

# convert the object into a dict
creative_asset_id_dict = creative_asset_id_instance.to_dict()
# create an instance of CreativeAssetId from a dict
creative_asset_id_from_dict = CreativeAssetId.from_dict(creative_asset_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


