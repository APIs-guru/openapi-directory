# ListAccountAdminsResponse

Response message for AccessControl.ListAccountAdmins.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_admins** | [**List[Admin]**](Admin.md) | A collection of Admin instances. | [optional] 

## Example

```python
from openapi_client.models.list_account_admins_response import ListAccountAdminsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountAdminsResponse from a JSON string
list_account_admins_response_instance = ListAccountAdminsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccountAdminsResponse.to_json())

# convert the object into a dict
list_account_admins_response_dict = list_account_admins_response_instance.to_dict()
# create an instance of ListAccountAdminsResponse from a dict
list_account_admins_response_from_dict = ListAccountAdminsResponse.from_dict(list_account_admins_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


