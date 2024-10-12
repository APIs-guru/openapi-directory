# GoogleCloudOrgpolicyV1BooleanPolicy

Used in `policy_type` to specify how `boolean_policy` will behave at this resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforced** | **bool** | If &#x60;true&#x60;, then the &#x60;Policy&#x60; is enforced. If &#x60;false&#x60;, then any configuration is acceptable. Suppose you have a &#x60;Constraint&#x60; &#x60;constraints/compute.disableSerialPortAccess&#x60; with &#x60;constraint_default&#x60; set to &#x60;ALLOW&#x60;. A &#x60;Policy&#x60; for that &#x60;Constraint&#x60; exhibits the following behavior: - If the &#x60;Policy&#x60; at this resource has enforced set to &#x60;false&#x60;, serial port connection attempts will be allowed. - If the &#x60;Policy&#x60; at this resource has enforced set to &#x60;true&#x60;, serial port connection attempts will be refused. - If the &#x60;Policy&#x60; at this resource is &#x60;RestoreDefault&#x60;, serial port connection attempts will be allowed. - If no &#x60;Policy&#x60; is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no &#x60;Policy&#x60; is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the&#x60;Policy&#x60; were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest &#x60;Constraint&#x60; wins): &#x60;organizations/foo&#x60; has a &#x60;Policy&#x60; with: {enforced: false} &#x60;projects/bar&#x60; has no &#x60;Policy&#x60; set. The constraint at &#x60;projects/bar&#x60; and &#x60;organizations/foo&#x60; will not be enforced. Example 2 (enforcement gets replaced): &#x60;organizations/foo&#x60; has a &#x60;Policy&#x60; with: {enforced: false} &#x60;projects/bar&#x60; has a &#x60;Policy&#x60; with: {enforced: true} The constraint at &#x60;organizations/foo&#x60; is not enforced. The constraint at &#x60;projects/bar&#x60; is enforced. Example 3 (RestoreDefault): &#x60;organizations/foo&#x60; has a &#x60;Policy&#x60; with: {enforced: true} &#x60;projects/bar&#x60; has a &#x60;Policy&#x60; with: {RestoreDefault: {}} The constraint at &#x60;organizations/foo&#x60; is enforced. The constraint at &#x60;projects/bar&#x60; is not enforced, because &#x60;constraint_default&#x60; for the &#x60;Constraint&#x60; is &#x60;ALLOW&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v1_boolean_policy import GoogleCloudOrgpolicyV1BooleanPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV1BooleanPolicy from a JSON string
google_cloud_orgpolicy_v1_boolean_policy_instance = GoogleCloudOrgpolicyV1BooleanPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV1BooleanPolicy.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v1_boolean_policy_dict = google_cloud_orgpolicy_v1_boolean_policy_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV1BooleanPolicy from a dict
google_cloud_orgpolicy_v1_boolean_policy_from_dict = GoogleCloudOrgpolicyV1BooleanPolicy.from_dict(google_cloud_orgpolicy_v1_boolean_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


