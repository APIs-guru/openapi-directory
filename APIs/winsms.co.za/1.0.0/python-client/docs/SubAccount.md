# SubAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **int** | The WinSMS account number of the Sub Account. This is supplied as an integer, without the leading &#39;W&#39; displayed in the WinSMS Client Zone.  | [optional] 
**credit_balance** | **float** | The remaining credit balance for the Sub Account.  | [optional] 
**first_name** | **str** | The first name of the user that the Sub Account is registered to.  | [optional] 
**login_name** | **str** | The login name of the user that the Sub Account is registered to.  | [optional] 
**surname** | **str** | The surname of the user that the Sub Account is registered to.  | [optional] 

## Example

```python
from openapi_client.models.sub_account import SubAccount

# TODO update the JSON string below
json = "{}"
# create an instance of SubAccount from a JSON string
sub_account_instance = SubAccount.from_json(json)
# print the JSON string representation of the object
print(SubAccount.to_json())

# convert the object into a dict
sub_account_dict = sub_account_instance.to_dict()
# create an instance of SubAccount from a dict
sub_account_from_dict = SubAccount.from_dict(sub_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


