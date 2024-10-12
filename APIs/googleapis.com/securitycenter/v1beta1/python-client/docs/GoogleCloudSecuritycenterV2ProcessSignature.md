# GoogleCloudSecuritycenterV2ProcessSignature

Indicates what signature matched this process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memory_hash_signature** | [**GoogleCloudSecuritycenterV2MemoryHashSignature**](GoogleCloudSecuritycenterV2MemoryHashSignature.md) |  | [optional] 
**signature_type** | **str** | Describes the type of resource associated with the signature. | [optional] 
**yara_rule_signature** | [**GoogleCloudSecuritycenterV2YaraRuleSignature**](GoogleCloudSecuritycenterV2YaraRuleSignature.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_process_signature import GoogleCloudSecuritycenterV2ProcessSignature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2ProcessSignature from a JSON string
google_cloud_securitycenter_v2_process_signature_instance = GoogleCloudSecuritycenterV2ProcessSignature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2ProcessSignature.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_process_signature_dict = google_cloud_securitycenter_v2_process_signature_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2ProcessSignature from a dict
google_cloud_securitycenter_v2_process_signature_from_dict = GoogleCloudSecuritycenterV2ProcessSignature.from_dict(google_cloud_securitycenter_v2_process_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


