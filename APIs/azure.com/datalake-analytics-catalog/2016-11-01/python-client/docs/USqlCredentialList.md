# USqlCredentialList

A Data Lake Analytics catalog U-SQL credential item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlCredential]**](USqlCredential.md) | the list of credentials in the database | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_credential_list import USqlCredentialList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlCredentialList from a JSON string
u_sql_credential_list_instance = USqlCredentialList.from_json(json)
# print the JSON string representation of the object
print(USqlCredentialList.to_json())

# convert the object into a dict
u_sql_credential_list_dict = u_sql_credential_list_instance.to_dict()
# create an instance of USqlCredentialList from a dict
u_sql_credential_list_from_dict = USqlCredentialList.from_dict(u_sql_credential_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


