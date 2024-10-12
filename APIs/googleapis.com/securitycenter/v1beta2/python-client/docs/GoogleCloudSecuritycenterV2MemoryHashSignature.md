# GoogleCloudSecuritycenterV2MemoryHashSignature

A signature corresponding to memory page hashes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_family** | **str** | The binary family. | [optional] 
**detections** | [**List[GoogleCloudSecuritycenterV2Detection]**](GoogleCloudSecuritycenterV2Detection.md) | The list of memory hash detections contributing to the binary family match. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_memory_hash_signature import GoogleCloudSecuritycenterV2MemoryHashSignature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2MemoryHashSignature from a JSON string
google_cloud_securitycenter_v2_memory_hash_signature_instance = GoogleCloudSecuritycenterV2MemoryHashSignature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2MemoryHashSignature.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_memory_hash_signature_dict = google_cloud_securitycenter_v2_memory_hash_signature_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2MemoryHashSignature from a dict
google_cloud_securitycenter_v2_memory_hash_signature_from_dict = GoogleCloudSecuritycenterV2MemoryHashSignature.from_dict(google_cloud_securitycenter_v2_memory_hash_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


