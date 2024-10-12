# AzureCredentials

Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sas_token** | **str** | Required. Azure shared access signature (SAS). For more information about SAS, see [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview). | [optional] 

## Example

```python
from openapi_client.models.azure_credentials import AzureCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of AzureCredentials from a JSON string
azure_credentials_instance = AzureCredentials.from_json(json)
# print the JSON string representation of the object
print(AzureCredentials.to_json())

# convert the object into a dict
azure_credentials_dict = azure_credentials_instance.to_dict()
# create an instance of AzureCredentials from a dict
azure_credentials_from_dict = AzureCredentials.from_dict(azure_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


