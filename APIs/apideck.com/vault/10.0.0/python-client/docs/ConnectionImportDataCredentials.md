# ConnectionImportDataCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Access token | [optional] 
**expires_in** | **int** | The number of seconds until the token expires. If omitted the token will be queued for refresh. | [optional] 
**issued_at** | **datetime** | The datetime at which the token was issued. If omitted the token will be queued for refresh. | [optional] 
**refresh_token** | **str** | The refresh token can be used to obtain a new access token. | 

## Example

```python
from openapi_client.models.connection_import_data_credentials import ConnectionImportDataCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionImportDataCredentials from a JSON string
connection_import_data_credentials_instance = ConnectionImportDataCredentials.from_json(json)
# print the JSON string representation of the object
print(ConnectionImportDataCredentials.to_json())

# convert the object into a dict
connection_import_data_credentials_dict = connection_import_data_credentials_instance.to_dict()
# create an instance of ConnectionImportDataCredentials from a dict
connection_import_data_credentials_from_dict = ConnectionImportDataCredentials.from_dict(connection_import_data_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


