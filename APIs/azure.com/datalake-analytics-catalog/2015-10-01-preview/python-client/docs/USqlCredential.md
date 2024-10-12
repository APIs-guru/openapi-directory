# USqlCredential

A Data Lake Analytics catalog U-SQL credential item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential_name** | **str** | the name of the credential. | [optional] 
**database_name** | **str** | the name of the database the credential is in. | [optional] 
**identity** | **str** | the name of the secret associated with the credential. | [optional] 
**user_name** | **str** | the user name associated with the credential. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_credential import USqlCredential

# TODO update the JSON string below
json = "{}"
# create an instance of USqlCredential from a JSON string
u_sql_credential_instance = USqlCredential.from_json(json)
# print the JSON string representation of the object
print(USqlCredential.to_json())

# convert the object into a dict
u_sql_credential_dict = u_sql_credential_instance.to_dict()
# create an instance of USqlCredential from a dict
u_sql_credential_from_dict = USqlCredential.from_dict(u_sql_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


