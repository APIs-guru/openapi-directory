# StartAssetImportResponse

A response message from a request to startImport. This is returned in the response field of the Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **str** | The id of newly created asset. If this is empty when the operation is complete it means the import failed. Please refer to the assetImportMessages field to understand what went wrong. | [optional] 
**asset_import_id** | **str** | The id of the asset import. | [optional] 
**asset_import_messages** | [**List[AssetImportMessage]**](AssetImportMessage.md) | The message from the asset import. This will contain any warnings (or - in the case of failure - errors) that occurred during import. | [optional] 
**publish_url** | **str** | The publish URL for the asset. | [optional] 

## Example

```python
from openapi_client.models.start_asset_import_response import StartAssetImportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StartAssetImportResponse from a JSON string
start_asset_import_response_instance = StartAssetImportResponse.from_json(json)
# print the JSON string representation of the object
print(StartAssetImportResponse.to_json())

# convert the object into a dict
start_asset_import_response_dict = start_asset_import_response_instance.to_dict()
# create an instance of StartAssetImportResponse from a dict
start_asset_import_response_from_dict = StartAssetImportResponse.from_dict(start_asset_import_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


