# GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse

The response to a `ListRelatedAccountGroupMemberships` call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**related_account_group_memberships** | [**List[GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership]**](GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership.md) | The memberships listed by the query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response import GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse from a JSON string
google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response_instance = GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response_dict = google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse from a dict
google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response_from_dict = GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse.from_dict(google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


