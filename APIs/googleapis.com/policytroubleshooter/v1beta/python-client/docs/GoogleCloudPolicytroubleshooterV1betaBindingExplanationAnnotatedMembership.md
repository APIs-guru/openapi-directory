# GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership

Details about whether the binding includes the member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership** | **str** | Indicates whether the binding includes the member. | [optional] 
**relevance** | **str** | The relevance of the member&#39;s status to the overall determination for the binding. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policytroubleshooter_v1beta_binding_explanation_annotated_membership import GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership from a JSON string
google_cloud_policytroubleshooter_v1beta_binding_explanation_annotated_membership_instance = GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership.to_json())

# convert the object into a dict
google_cloud_policytroubleshooter_v1beta_binding_explanation_annotated_membership_dict = google_cloud_policytroubleshooter_v1beta_binding_explanation_annotated_membership_instance.to_dict()
# create an instance of GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership from a dict
google_cloud_policytroubleshooter_v1beta_binding_explanation_annotated_membership_from_dict = GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership.from_dict(google_cloud_policytroubleshooter_v1beta_binding_explanation_annotated_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


