# AccountProperties

The properties of a machine learning team account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The immutable id associated with this team account. | [optional] [readonly] 
**creation_date** | **datetime** | The creation date of the machine learning team account in ISO8601 format. | [optional] [readonly] 
**description** | **str** | The description of this workspace. | [optional] 
**discovery_uri** | **str** | The uri for this machine learning team account. | [optional] [readonly] 
**friendly_name** | **str** | The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created | [optional] 
**key_vault_id** | **str** | The fully qualified arm id of the user key vault. | 
**provisioning_state** | **str** | The current deployment state of team account resource. The provisioningState is to indicate states for resource provisioning. | [optional] [readonly] 
**seats** | **str** | The no of users/seats who can access this team account. This property defines the charge on the team account. | [optional] 
**storage_account** | [**StorageAccountProperties**](StorageAccountProperties.md) |  | 
**vso_account_id** | **str** | The fully qualified arm id of the vso account to be used for this team account. | 

## Example

```python
from openapi_client.models.account_properties import AccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AccountProperties from a JSON string
account_properties_instance = AccountProperties.from_json(json)
# print the JSON string representation of the object
print(AccountProperties.to_json())

# convert the object into a dict
account_properties_dict = account_properties_instance.to_dict()
# create an instance of AccountProperties from a dict
account_properties_from_dict = AccountProperties.from_dict(account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


