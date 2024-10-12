# GoogleCloudChannelV1Customer

Entity representing a customer of a reseller or distributor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_email** | **str** | Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers. | [optional] 
**channel_partner_id** | **str** | Cloud Identity ID of the customer&#39;s channel partner. Populated only if a channel partner exists for this customer. | [optional] 
**cloud_identity_id** | **str** | Output only. The customer&#39;s Cloud Identity ID if the customer has a Cloud Identity resource. | [optional] [readonly] 
**cloud_identity_info** | [**GoogleCloudChannelV1CloudIdentityInfo**](GoogleCloudChannelV1CloudIdentityInfo.md) |  | [optional] 
**correlation_id** | **str** | Optional. External CRM ID for the customer. Populated only if a CRM ID exists for this customer. | [optional] 
**create_time** | **str** | Output only. Time when the customer was created. | [optional] [readonly] 
**domain** | **str** | Required. The customer&#39;s primary domain. Must match the primary contact email&#39;s domain. | [optional] 
**language_code** | **str** | Optional. The BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
**name** | **str** | Output only. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id} | [optional] [readonly] 
**org_display_name** | **str** | Required. Name of the organization that the customer entity represents. | [optional] 
**org_postal_address** | [**GoogleTypePostalAddress**](GoogleTypePostalAddress.md) |  | [optional] 
**primary_contact_info** | [**GoogleCloudChannelV1ContactInfo**](GoogleCloudChannelV1ContactInfo.md) |  | [optional] 
**update_time** | **str** | Output only. Time when the customer was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_customer import GoogleCloudChannelV1Customer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Customer from a JSON string
google_cloud_channel_v1_customer_instance = GoogleCloudChannelV1Customer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Customer.to_json())

# convert the object into a dict
google_cloud_channel_v1_customer_dict = google_cloud_channel_v1_customer_instance.to_dict()
# create an instance of GoogleCloudChannelV1Customer from a dict
google_cloud_channel_v1_customer_from_dict = GoogleCloudChannelV1Customer.from_dict(google_cloud_channel_v1_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


