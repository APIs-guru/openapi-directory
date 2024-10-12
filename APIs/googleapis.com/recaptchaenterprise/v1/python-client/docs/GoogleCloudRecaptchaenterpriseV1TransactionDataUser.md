# GoogleCloudRecaptchaenterpriseV1TransactionDataUser

Details about a user's account involved in the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Optional. Unique account identifier for this user. If using account defender, this should match the hashed_account_id field. Otherwise, a unique and persistent identifier for this account. | [optional] 
**creation_ms** | **str** | Optional. The epoch milliseconds of the user&#39;s account creation. | [optional] 
**email** | **str** | Optional. The email address of the user. | [optional] 
**email_verified** | **bool** | Optional. Whether the email has been verified to be accessible by the user (OTP or similar). | [optional] 
**phone_number** | **str** | Optional. The phone number of the user, with country code. | [optional] 
**phone_verified** | **bool** | Optional. Whether the phone number has been verified to be accessible by the user (OTP or similar). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_transaction_data_user import GoogleCloudRecaptchaenterpriseV1TransactionDataUser

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionDataUser from a JSON string
google_cloud_recaptchaenterprise_v1_transaction_data_user_instance = GoogleCloudRecaptchaenterpriseV1TransactionDataUser.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1TransactionDataUser.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_transaction_data_user_dict = google_cloud_recaptchaenterprise_v1_transaction_data_user_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1TransactionDataUser from a dict
google_cloud_recaptchaenterprise_v1_transaction_data_user_from_dict = GoogleCloudRecaptchaenterpriseV1TransactionDataUser.from_dict(google_cloud_recaptchaenterprise_v1_transaction_data_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


