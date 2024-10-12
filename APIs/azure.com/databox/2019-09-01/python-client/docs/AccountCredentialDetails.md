# AccountCredentialDetails

Credential details of the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_connection_string** | **str** | Connection string of the account endpoint to use the account as a storage endpoint on the device. | [optional] [readonly] 
**account_name** | **str** | Name of the account. | [optional] [readonly] 
**data_destination_type** | **str** | Data Destination Type. | [optional] [readonly] 
**share_credential_details** | [**List[ShareCredentialDetails]**](ShareCredentialDetails.md) | Per share level unencrypted access credentials. | [optional] [readonly] 

## Example

```python
from openapi_client.models.account_credential_details import AccountCredentialDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AccountCredentialDetails from a JSON string
account_credential_details_instance = AccountCredentialDetails.from_json(json)
# print the JSON string representation of the object
print(AccountCredentialDetails.to_json())

# convert the object into a dict
account_credential_details_dict = account_credential_details_instance.to_dict()
# create an instance of AccountCredentialDetails from a dict
account_credential_details_from_dict = AccountCredentialDetails.from_dict(account_credential_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


