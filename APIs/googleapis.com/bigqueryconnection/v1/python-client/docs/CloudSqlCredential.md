# CloudSqlCredential

Credential info for the Cloud SQL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password for the credential. | [optional] 
**username** | **str** | The username for the credential. | [optional] 

## Example

```python
from openapi_client.models.cloud_sql_credential import CloudSqlCredential

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSqlCredential from a JSON string
cloud_sql_credential_instance = CloudSqlCredential.from_json(json)
# print the JSON string representation of the object
print(CloudSqlCredential.to_json())

# convert the object into a dict
cloud_sql_credential_dict = cloud_sql_credential_instance.to_dict()
# create an instance of CloudSqlCredential from a dict
cloud_sql_credential_from_dict = CloudSqlCredential.from_dict(cloud_sql_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


