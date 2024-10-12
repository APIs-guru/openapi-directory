# GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup

A group of related accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Identifier. The resource name for the related account group in the format &#x60;projects/{project}/relatedaccountgroups/{related_account_group}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_related_account_group import GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup from a JSON string
google_cloud_recaptchaenterprise_v1_related_account_group_instance = GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_related_account_group_dict = google_cloud_recaptchaenterprise_v1_related_account_group_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup from a dict
google_cloud_recaptchaenterprise_v1_related_account_group_from_dict = GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup.from_dict(google_cloud_recaptchaenterprise_v1_related_account_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


