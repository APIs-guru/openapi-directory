# GoogleCloudOrgpolicyV2AlternatePolicySpec

Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**launch** | **str** | Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy. | [optional] 
**spec** | [**GoogleCloudOrgpolicyV2PolicySpec**](GoogleCloudOrgpolicyV2PolicySpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_alternate_policy_spec import GoogleCloudOrgpolicyV2AlternatePolicySpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2AlternatePolicySpec from a JSON string
google_cloud_orgpolicy_v2_alternate_policy_spec_instance = GoogleCloudOrgpolicyV2AlternatePolicySpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2AlternatePolicySpec.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_alternate_policy_spec_dict = google_cloud_orgpolicy_v2_alternate_policy_spec_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2AlternatePolicySpec from a dict
google_cloud_orgpolicy_v2_alternate_policy_spec_from_dict = GoogleCloudOrgpolicyV2AlternatePolicySpec.from_dict(google_cloud_orgpolicy_v2_alternate_policy_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


