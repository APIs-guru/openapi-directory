# EnvironmentImageAsset

An Image asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Asset Id. | [optional] 
**mime_type** | **str** | The mime type. | [optional] 
**unpack** | **bool** | Whether the Asset is unpacked. | [optional] 
**url** | **str** | The Url of the Asset. | [optional] 

## Example

```python
from openapi_client.models.environment_image_asset import EnvironmentImageAsset

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentImageAsset from a JSON string
environment_image_asset_instance = EnvironmentImageAsset.from_json(json)
# print the JSON string representation of the object
print(EnvironmentImageAsset.to_json())

# convert the object into a dict
environment_image_asset_dict = environment_image_asset_instance.to_dict()
# create an instance of EnvironmentImageAsset from a dict
environment_image_asset_from_dict = EnvironmentImageAsset.from_dict(environment_image_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


