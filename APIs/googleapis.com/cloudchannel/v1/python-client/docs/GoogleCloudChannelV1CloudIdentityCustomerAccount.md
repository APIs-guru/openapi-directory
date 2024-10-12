# GoogleCloudChannelV1CloudIdentityCustomerAccount

Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_cloud_identity_id** | **str** | If existing &#x3D; true, the Cloud Identity ID of the customer. | [optional] 
**customer_name** | **str** | If owned &#x3D; true, the name of the customer that owns the Cloud Identity account. Customer_name uses the format: accounts/{account_id}/customers/{customer_id} | [optional] 
**existing** | **bool** | Returns true if a Cloud Identity account exists for a specific domain. | [optional] 
**owned** | **bool** | Returns true if the Cloud Identity account is associated with a customer of the Channel Services partner. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_cloud_identity_customer_account import GoogleCloudChannelV1CloudIdentityCustomerAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1CloudIdentityCustomerAccount from a JSON string
google_cloud_channel_v1_cloud_identity_customer_account_instance = GoogleCloudChannelV1CloudIdentityCustomerAccount.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1CloudIdentityCustomerAccount.to_json())

# convert the object into a dict
google_cloud_channel_v1_cloud_identity_customer_account_dict = google_cloud_channel_v1_cloud_identity_customer_account_instance.to_dict()
# create an instance of GoogleCloudChannelV1CloudIdentityCustomerAccount from a dict
google_cloud_channel_v1_cloud_identity_customer_account_from_dict = GoogleCloudChannelV1CloudIdentityCustomerAccount.from_dict(google_cloud_channel_v1_cloud_identity_customer_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


