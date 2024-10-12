# GoogleCloudChannelV1CloudIdentityInfo

Cloud Identity information for the Cloud Channel Customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_console_uri** | **str** | Output only. URI of Customer&#39;s Admin console dashboard. | [optional] [readonly] 
**alternate_email** | **str** | The alternate email. | [optional] 
**customer_type** | **str** | CustomerType indicates verification type needed for using services. | [optional] 
**edu_data** | [**GoogleCloudChannelV1EduData**](GoogleCloudChannelV1EduData.md) |  | [optional] 
**is_domain_verified** | **bool** | Output only. Whether the domain is verified. This field is not returned for a Customer&#39;s cloud_identity_info resource. Partners can use the domains.get() method of the Workspace SDK&#39;s Directory API, or listen to the PRIMARY_DOMAIN_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers. | [optional] [readonly] 
**language_code** | **str** | Language code. | [optional] 
**phone_number** | **str** | Phone number associated with the Cloud Identity. | [optional] 
**primary_domain** | **str** | Output only. The primary domain name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_cloud_identity_info import GoogleCloudChannelV1CloudIdentityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1CloudIdentityInfo from a JSON string
google_cloud_channel_v1_cloud_identity_info_instance = GoogleCloudChannelV1CloudIdentityInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1CloudIdentityInfo.to_json())

# convert the object into a dict
google_cloud_channel_v1_cloud_identity_info_dict = google_cloud_channel_v1_cloud_identity_info_instance.to_dict()
# create an instance of GoogleCloudChannelV1CloudIdentityInfo from a dict
google_cloud_channel_v1_cloud_identity_info_from_dict = GoogleCloudChannelV1CloudIdentityInfo.from_dict(google_cloud_channel_v1_cloud_identity_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


