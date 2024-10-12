# CreateManifestResponseBody

A create manifest response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifests** | [**List[Manifest]**](Manifest.md) | Resulting Manifests | [optional] 
**manifest_requests** | [**List[ManifestRequest]**](ManifestRequest.md) | Resulting manifest requests with statuses | [optional] 
**carrier_id** | **str** | A string that uniquely identifies the carrier | 
**created_at** | **datetime** | The date-time that the manifest was created | 
**form_id** | **str** | A string that uniquely identifies the form | 
**label_ids** | **List[str]** | An array of the label ids used in this manifest. | [optional] [readonly] 
**manifest_download** | [**ManifestDownload**](ManifestDownload.md) |  | 
**manifest_id** | **str** | A string that uniquely identifies the manifest | 
**ship_date** | **datetime** | The date-time that the manifests shipments will be picked up | 
**shipments** | **int** | The number of shipments that are included in this manifest | [readonly] 
**submission_id** | **str** | A string that uniquely identifies the submission | 
**warehouse_id** | **str** | A string that uniquely identifies the warehouse | 
**errors** | [**List[Error]**](Error.md) | The errors associated with the failed API call | [readonly] 
**request_id** | **str** | A UUID that uniquely identifies the request id. This can be given to the support team to help debug non-trivial issues that may occur  | 

## Example

```python
from openapi_client.models.create_manifest_response_body import CreateManifestResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManifestResponseBody from a JSON string
create_manifest_response_body_instance = CreateManifestResponseBody.from_json(json)
# print the JSON string representation of the object
print(CreateManifestResponseBody.to_json())

# convert the object into a dict
create_manifest_response_body_dict = create_manifest_response_body_instance.to_dict()
# create an instance of CreateManifestResponseBody from a dict
create_manifest_response_body_from_dict = CreateManifestResponseBody.from_dict(create_manifest_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


