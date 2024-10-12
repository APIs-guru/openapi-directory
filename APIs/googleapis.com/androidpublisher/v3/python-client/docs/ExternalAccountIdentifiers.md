# ExternalAccountIdentifiers

User account identifier in the third-party service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_account_id** | **str** | User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow. | [optional] 
**obfuscated_external_account_id** | **str** | An obfuscated version of the id that is uniquely associated with the user&#39;s account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made. | [optional] 
**obfuscated_external_profile_id** | **str** | An obfuscated version of the id that is uniquely associated with the user&#39;s profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made. | [optional] 

## Example

```python
from openapi_client.models.external_account_identifiers import ExternalAccountIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalAccountIdentifiers from a JSON string
external_account_identifiers_instance = ExternalAccountIdentifiers.from_json(json)
# print the JSON string representation of the object
print(ExternalAccountIdentifiers.to_json())

# convert the object into a dict
external_account_identifiers_dict = external_account_identifiers_instance.to_dict()
# create an instance of ExternalAccountIdentifiers from a dict
external_account_identifiers_from_dict = ExternalAccountIdentifiers.from_dict(external_account_identifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


