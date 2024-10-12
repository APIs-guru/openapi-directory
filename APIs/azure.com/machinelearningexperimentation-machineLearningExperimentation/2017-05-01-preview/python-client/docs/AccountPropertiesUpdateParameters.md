# AccountPropertiesUpdateParameters

The parameters for updating the properties of a machine learning team account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of this workspace. | [optional] 
**friendly_name** | **str** | The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created | [optional] 
**seats** | **str** | The no of users/seats who can access this team account. This property defines the charge on the team account. | [optional] 
**storage_account_key** | **str** | The key for storage account associated with this team account | [optional] 

## Example

```python
from openapi_client.models.account_properties_update_parameters import AccountPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AccountPropertiesUpdateParameters from a JSON string
account_properties_update_parameters_instance = AccountPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AccountPropertiesUpdateParameters.to_json())

# convert the object into a dict
account_properties_update_parameters_dict = account_properties_update_parameters_instance.to_dict()
# create an instance of AccountPropertiesUpdateParameters from a dict
account_properties_update_parameters_from_dict = AccountPropertiesUpdateParameters.from_dict(account_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


