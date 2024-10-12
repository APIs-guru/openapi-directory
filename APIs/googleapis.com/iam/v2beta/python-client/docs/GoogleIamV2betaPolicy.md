# GoogleIamV2betaPolicy

Data for an IAM policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | A key-value map to store arbitrary metadata for the &#x60;Policy&#x60;. Keys can be up to 63 characters. Values can be up to 255 characters. | [optional] 
**create_time** | **str** | Output only. The time when the &#x60;Policy&#x60; was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. The time when the &#x60;Policy&#x60; was deleted. Empty if the policy is not deleted. | [optional] [readonly] 
**display_name** | **str** | A user-specified description of the &#x60;Policy&#x60;. This value can be up to 63 characters. | [optional] 
**etag** | **str** | An opaque tag that identifies the current version of the &#x60;Policy&#x60;. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored. | [optional] 
**kind** | **str** | Output only. The kind of the &#x60;Policy&#x60;. Always contains the value &#x60;DenyPolicy&#x60;. | [optional] [readonly] 
**name** | **str** | Immutable. The resource name of the &#x60;Policy&#x60;, which must be unique. Format: &#x60;policies/{attachment_point}/denypolicies/{policy_id}&#x60; The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, &#x60;/&#x60;, must be written as &#x60;%2F&#x60;. For example, &#x60;policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy&#x60;. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID. | [optional] 
**rules** | [**List[GoogleIamV2betaPolicyRule]**](GoogleIamV2betaPolicyRule.md) | A list of rules that specify the behavior of the &#x60;Policy&#x60;. All of the rules should be of the &#x60;kind&#x60; specified in the &#x60;Policy&#x60;. | [optional] 
**uid** | **str** | Immutable. The globally unique ID of the &#x60;Policy&#x60;. Assigned automatically when the &#x60;Policy&#x60; is created. | [optional] 
**update_time** | **str** | Output only. The time when the &#x60;Policy&#x60; was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_iam_v2beta_policy import GoogleIamV2betaPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV2betaPolicy from a JSON string
google_iam_v2beta_policy_instance = GoogleIamV2betaPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV2betaPolicy.to_json())

# convert the object into a dict
google_iam_v2beta_policy_dict = google_iam_v2beta_policy_instance.to_dict()
# create an instance of GoogleIamV2betaPolicy from a dict
google_iam_v2beta_policy_from_dict = GoogleIamV2betaPolicy.from_dict(google_iam_v2beta_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


