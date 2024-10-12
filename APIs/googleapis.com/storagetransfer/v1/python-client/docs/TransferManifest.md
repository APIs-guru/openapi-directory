# TransferManifest

Specifies where the manifest is located.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must have &#x60;storage.objects.get&#x60; permission for this object. An example path is &#x60;gs://bucket_name/path/manifest.csv&#x60;. | [optional] 

## Example

```python
from openapi_client.models.transfer_manifest import TransferManifest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferManifest from a JSON string
transfer_manifest_instance = TransferManifest.from_json(json)
# print the JSON string representation of the object
print(TransferManifest.to_json())

# convert the object into a dict
transfer_manifest_dict = transfer_manifest_instance.to_dict()
# create an instance of TransferManifest from a dict
transfer_manifest_from_dict = TransferManifest.from_dict(transfer_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


