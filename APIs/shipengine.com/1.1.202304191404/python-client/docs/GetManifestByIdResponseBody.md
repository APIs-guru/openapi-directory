# GetManifestByIdResponseBody

A get manifest by id response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **str** | A string that uniquely identifies the carrier | [readonly] 
**created_at** | **datetime** | The date-time that the manifest was created | [readonly] 
**form_id** | **str** | A string that uniquely identifies the form | [readonly] 
**label_ids** | **List[str]** | An array of the label ids used in this manifest. | [readonly] 
**manifest_download** | [**ManifestDownload**](ManifestDownload.md) |  | [readonly] 
**manifest_id** | **str** | A string that uniquely identifies the manifest | [readonly] 
**ship_date** | **datetime** | The date-time that the manifests shipments will be picked up | [readonly] 
**shipments** | **int** | The number of shipments that are included in this manifest | [readonly] 
**submission_id** | **str** | A string that uniquely identifies the submission | [readonly] 
**warehouse_id** | **str** | A string that uniquely identifies the warehouse | [readonly] 

## Example

```python
from openapi_client.models.get_manifest_by_id_response_body import GetManifestByIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetManifestByIdResponseBody from a JSON string
get_manifest_by_id_response_body_instance = GetManifestByIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetManifestByIdResponseBody.to_json())

# convert the object into a dict
get_manifest_by_id_response_body_dict = get_manifest_by_id_response_body_instance.to_dict()
# create an instance of GetManifestByIdResponseBody from a dict
get_manifest_by_id_response_body_from_dict = GetManifestByIdResponseBody.from_dict(get_manifest_by_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


