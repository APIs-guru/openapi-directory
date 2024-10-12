# GoogleCloudChannelV1ImportCustomerRequest

Request message for CloudChannelService.ImportCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | **str** | Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details. | [optional] 
**channel_partner_id** | **str** | Optional. Cloud Identity ID of a channel partner who will be the direct reseller for the customer&#39;s order. This field is required for 2-tier transfer scenarios and can be provided via the request Parent binding as well. | [optional] 
**cloud_identity_id** | **str** | Required. Customer&#39;s Cloud Identity ID | [optional] 
**customer** | **str** | Optional. Specifies the customer that will receive imported Cloud Identity information. Format: accounts/{account_id}/customers/{customer_id} | [optional] 
**domain** | **str** | Required. Customer domain. | [optional] 
**overwrite_if_exists** | **bool** | Required. Choose to overwrite an existing customer if found. This must be set to true if there is an existing customer with a conflicting region code or domain. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_import_customer_request import GoogleCloudChannelV1ImportCustomerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ImportCustomerRequest from a JSON string
google_cloud_channel_v1_import_customer_request_instance = GoogleCloudChannelV1ImportCustomerRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ImportCustomerRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_import_customer_request_dict = google_cloud_channel_v1_import_customer_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1ImportCustomerRequest from a dict
google_cloud_channel_v1_import_customer_request_from_dict = GoogleCloudChannelV1ImportCustomerRequest.from_dict(google_cloud_channel_v1_import_customer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


