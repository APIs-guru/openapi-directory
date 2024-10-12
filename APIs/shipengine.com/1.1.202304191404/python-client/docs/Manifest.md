# Manifest

Used for combining packages into one scannable form that a carrier can use when picking up a large  number of shipments 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **str** | A string that uniquely identifies the carrier | [optional] [readonly] 
**created_at** | **datetime** | The date-time that the manifest was created | [optional] [readonly] 
**form_id** | **str** | A string that uniquely identifies the form | [optional] [readonly] 
**label_ids** | **List[str]** | An array of the label ids used in this manifest. | [optional] [readonly] 
**manifest_download** | [**ManifestDownload**](ManifestDownload.md) |  | [optional] [readonly] 
**manifest_id** | **str** | A string that uniquely identifies the manifest | [optional] [readonly] 
**ship_date** | **datetime** | The date-time that the manifests shipments will be picked up | [optional] [readonly] 
**shipments** | **int** | The number of shipments that are included in this manifest | [optional] [readonly] 
**submission_id** | **str** | A string that uniquely identifies the submission | [optional] [readonly] 
**warehouse_id** | **str** | A string that uniquely identifies the warehouse | [optional] [readonly] 

## Example

```python
from openapi_client.models.manifest import Manifest

# TODO update the JSON string below
json = "{}"
# create an instance of Manifest from a JSON string
manifest_instance = Manifest.from_json(json)
# print the JSON string representation of the object
print(Manifest.to_json())

# convert the object into a dict
manifest_dict = manifest_instance.to_dict()
# create an instance of Manifest from a dict
manifest_from_dict = Manifest.from_dict(manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


