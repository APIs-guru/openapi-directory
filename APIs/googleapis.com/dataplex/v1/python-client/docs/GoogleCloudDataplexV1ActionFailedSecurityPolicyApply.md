# GoogleCloudDataplexV1ActionFailedSecurityPolicyApply

Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | Resource name of one of the assets with failing security policy application. Populated for a lake or zone resource only. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_action_failed_security_policy_apply import GoogleCloudDataplexV1ActionFailedSecurityPolicyApply

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ActionFailedSecurityPolicyApply from a JSON string
google_cloud_dataplex_v1_action_failed_security_policy_apply_instance = GoogleCloudDataplexV1ActionFailedSecurityPolicyApply.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ActionFailedSecurityPolicyApply.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_action_failed_security_policy_apply_dict = google_cloud_dataplex_v1_action_failed_security_policy_apply_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ActionFailedSecurityPolicyApply from a dict
google_cloud_dataplex_v1_action_failed_security_policy_apply_from_dict = GoogleCloudDataplexV1ActionFailedSecurityPolicyApply.from_dict(google_cloud_dataplex_v1_action_failed_security_policy_apply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


