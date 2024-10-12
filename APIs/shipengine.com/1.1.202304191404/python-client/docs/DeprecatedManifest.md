# DeprecatedManifest

Deprecated manifest resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **str** | A string that uniquely identifies the carrier | [optional] 
**created_at** | **datetime** | The date-time that the manifest was created | [optional] 
**form_id** | **str** | A string that uniquely identifies the form | [optional] 
**label_ids** | **List[str]** | An array of the label ids used in this manifest. | [optional] [readonly] 
**manifest_download** | [**ManifestDownload**](ManifestDownload.md) |  | [optional] 
**manifest_id** | **str** | A string that uniquely identifies the manifest | [optional] 
**ship_date** | **datetime** | The date-time that the manifests shipments will be picked up | [optional] 
**shipments** | **int** | The number of shipments that are included in this manifest | [optional] [readonly] 
**submission_id** | **str** | A string that uniquely identifies the submission | [optional] 
**warehouse_id** | **str** | A string that uniquely identifies the warehouse | [optional] 

## Example

```python
from openapi_client.models.deprecated_manifest import DeprecatedManifest

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecatedManifest from a JSON string
deprecated_manifest_instance = DeprecatedManifest.from_json(json)
# print the JSON string representation of the object
print(DeprecatedManifest.to_json())

# convert the object into a dict
deprecated_manifest_dict = deprecated_manifest_instance.to_dict()
# create an instance of DeprecatedManifest from a dict
deprecated_manifest_from_dict = DeprecatedManifest.from_dict(deprecated_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


