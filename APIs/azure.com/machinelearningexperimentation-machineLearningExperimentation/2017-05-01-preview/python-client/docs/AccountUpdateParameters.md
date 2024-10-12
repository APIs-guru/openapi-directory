# AccountUpdateParameters

The parameters for updating a machine learning team account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AccountPropertiesUpdateParameters**](AccountPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags for the machine learning team account. | [optional] 

## Example

```python
from openapi_client.models.account_update_parameters import AccountUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AccountUpdateParameters from a JSON string
account_update_parameters_instance = AccountUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AccountUpdateParameters.to_json())

# convert the object into a dict
account_update_parameters_dict = account_update_parameters_instance.to_dict()
# create an instance of AccountUpdateParameters from a dict
account_update_parameters_from_dict = AccountUpdateParameters.from_dict(account_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


