# GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership

A membership in a group of related accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The unique stable account identifier of the member. The identifier corresponds to an &#x60;account_id&#x60; provided in a previous &#x60;CreateAssessment&#x60; or &#x60;AnnotateAssessment&#x60; call. | [optional] 
**hashed_account_id** | **bytearray** | Deprecated: use &#x60;account_id&#x60; instead. The unique stable hashed account identifier of the member. The identifier corresponds to a &#x60;hashed_account_id&#x60; provided in a previous &#x60;CreateAssessment&#x60; or &#x60;AnnotateAssessment&#x60; call. | [optional] 
**name** | **str** | Required. Identifier. The resource name for this membership in the format &#x60;projects/{project}/relatedaccountgroups/{relatedaccountgroup}/memberships/{membership}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_related_account_group_membership import GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership from a JSON string
google_cloud_recaptchaenterprise_v1_related_account_group_membership_instance = GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_related_account_group_membership_dict = google_cloud_recaptchaenterprise_v1_related_account_group_membership_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership from a dict
google_cloud_recaptchaenterprise_v1_related_account_group_membership_from_dict = GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership.from_dict(google_cloud_recaptchaenterprise_v1_related_account_group_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


