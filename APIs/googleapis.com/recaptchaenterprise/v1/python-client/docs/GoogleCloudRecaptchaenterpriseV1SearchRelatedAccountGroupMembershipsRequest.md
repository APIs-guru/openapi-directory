# GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest

The request message to search related account group memberships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Optional. The unique stable account identifier used to search connections. The identifier should correspond to an &#x60;account_id&#x60; provided in a previous &#x60;CreateAssessment&#x60; or &#x60;AnnotateAssessment&#x60; call. Either hashed_account_id or account_id must be set, but not both. | [optional] 
**hashed_account_id** | **bytearray** | Optional. Deprecated: use &#x60;account_id&#x60; instead. The unique stable hashed account identifier used to search connections. The identifier should correspond to a &#x60;hashed_account_id&#x60; provided in a previous &#x60;CreateAssessment&#x60; or &#x60;AnnotateAssessment&#x60; call. Either hashed_account_id or account_id must be set, but not both. | [optional] 
**page_size** | **int** | Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000. | [optional] 
**page_token** | **str** | Optional. A page token, received from a previous &#x60;SearchRelatedAccountGroupMemberships&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;SearchRelatedAccountGroupMemberships&#x60; must match the call that provided the page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request import GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest from a JSON string
google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request_instance = GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request_dict = google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest from a dict
google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request_from_dict = GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest.from_dict(google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


