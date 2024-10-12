# USqlSecret

A Data Lake Analytics catalog U-SQL secret item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | the creation time of the credential object. This is the only information returned about a secret from a GET. | [optional] 
**database_name** | **str** | the name of the database. | [optional] 
**password** | **str** | the password for the secret to pass in | [optional] 
**secret_name** | **str** | the name of the secret. | [optional] 
**uri** | **str** | the URI identifier for the secret in the format &lt;hostname&gt;:&lt;port&gt; | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_secret import USqlSecret

# TODO update the JSON string below
json = "{}"
# create an instance of USqlSecret from a JSON string
u_sql_secret_instance = USqlSecret.from_json(json)
# print the JSON string representation of the object
print(USqlSecret.to_json())

# convert the object into a dict
u_sql_secret_dict = u_sql_secret_instance.to_dict()
# create an instance of USqlSecret from a dict
u_sql_secret_from_dict = USqlSecret.from_dict(u_sql_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


