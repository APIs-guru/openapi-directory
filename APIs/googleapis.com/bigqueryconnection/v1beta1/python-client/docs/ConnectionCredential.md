# ConnectionCredential

Credential to use with a connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_sql** | [**CloudSqlCredential**](CloudSqlCredential.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_credential import ConnectionCredential

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionCredential from a JSON string
connection_credential_instance = ConnectionCredential.from_json(json)
# print the JSON string representation of the object
print(ConnectionCredential.to_json())

# convert the object into a dict
connection_credential_dict = connection_credential_instance.to_dict()
# create an instance of ConnectionCredential from a dict
connection_credential_from_dict = ConnectionCredential.from_dict(connection_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


