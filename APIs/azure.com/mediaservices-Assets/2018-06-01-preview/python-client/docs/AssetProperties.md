# AssetProperties

The Asset properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_id** | **str** | The alternate ID of the Asset. | [optional] 
**asset_id** | **str** | The Asset ID. | [optional] [readonly] 
**container** | **str** | The name of the asset blob container. | [optional] 
**created** | **datetime** | The creation date of the Asset. | [optional] [readonly] 
**description** | **str** | The Asset description. | [optional] 
**last_modified** | **datetime** | The last modified date of the Asset. | [optional] [readonly] 
**storage_account_name** | **str** | The name of the storage account. | [optional] 
**storage_encryption_format** | **str** | The Asset encryption format. One of None or MediaStorageEncryption. | [optional] [readonly] 

## Example

```python
from openapi_client.models.asset_properties import AssetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AssetProperties from a JSON string
asset_properties_instance = AssetProperties.from_json(json)
# print the JSON string representation of the object
print(AssetProperties.to_json())

# convert the object into a dict
asset_properties_dict = asset_properties_instance.to_dict()
# create an instance of AssetProperties from a dict
asset_properties_from_dict = AssetProperties.from_dict(asset_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


