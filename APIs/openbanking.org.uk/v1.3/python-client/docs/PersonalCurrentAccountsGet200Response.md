# PersonalCurrentAccountsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PersonalCurrentAccountsGet200ResponseDataInner]**](PersonalCurrentAccountsGet200ResponseDataInner.md) |  | 
**meta** | [**MetaData**](MetaData.md) |  | 

## Example

```python
from openapi_client.models.personal_current_accounts_get200_response import PersonalCurrentAccountsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalCurrentAccountsGet200Response from a JSON string
personal_current_accounts_get200_response_instance = PersonalCurrentAccountsGet200Response.from_json(json)
# print the JSON string representation of the object
print(PersonalCurrentAccountsGet200Response.to_json())

# convert the object into a dict
personal_current_accounts_get200_response_dict = personal_current_accounts_get200_response_instance.to_dict()
# create an instance of PersonalCurrentAccountsGet200Response from a dict
personal_current_accounts_get200_response_from_dict = PersonalCurrentAccountsGet200Response.from_dict(personal_current_accounts_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


