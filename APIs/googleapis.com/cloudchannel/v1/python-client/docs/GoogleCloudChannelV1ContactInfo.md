# GoogleCloudChannelV1ContactInfo

Contact information for a customer account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The customer account contact&#39;s display name, formatted as a combination of the customer&#39;s first and last name. | [optional] [readonly] 
**email** | **str** | The customer account&#39;s contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer&#39;s username for those accounts. Use this email to invite Team customers. | [optional] 
**first_name** | **str** | The customer account contact&#39;s first name. Optional for Team customers. | [optional] 
**last_name** | **str** | The customer account contact&#39;s last name. Optional for Team customers. | [optional] 
**phone** | **str** | The customer account&#39;s contact phone number. | [optional] 
**title** | **str** | Optional. The customer account contact&#39;s job title. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_contact_info import GoogleCloudChannelV1ContactInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ContactInfo from a JSON string
google_cloud_channel_v1_contact_info_instance = GoogleCloudChannelV1ContactInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ContactInfo.to_json())

# convert the object into a dict
google_cloud_channel_v1_contact_info_dict = google_cloud_channel_v1_contact_info_instance.to_dict()
# create an instance of GoogleCloudChannelV1ContactInfo from a dict
google_cloud_channel_v1_contact_info_from_dict = GoogleCloudChannelV1ContactInfo.from_dict(google_cloud_channel_v1_contact_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


