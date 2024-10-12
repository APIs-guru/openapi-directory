# GoogleCloudSecuritycenterV2YaraRuleSignature

A signature corresponding to a YARA rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**yara_rule** | **str** | The name of the YARA rule. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_yara_rule_signature import GoogleCloudSecuritycenterV2YaraRuleSignature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2YaraRuleSignature from a JSON string
google_cloud_securitycenter_v2_yara_rule_signature_instance = GoogleCloudSecuritycenterV2YaraRuleSignature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2YaraRuleSignature.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_yara_rule_signature_dict = google_cloud_securitycenter_v2_yara_rule_signature_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2YaraRuleSignature from a dict
google_cloud_securitycenter_v2_yara_rule_signature_from_dict = GoogleCloudSecuritycenterV2YaraRuleSignature.from_dict(google_cloud_securitycenter_v2_yara_rule_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


