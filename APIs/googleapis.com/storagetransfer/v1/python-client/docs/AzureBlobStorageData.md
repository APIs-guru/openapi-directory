# AzureBlobStorageData

An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_credentials** | [**AzureCredentials**](AzureCredentials.md) |  | [optional] 
**container** | **str** | Required. The container to transfer from the Azure Storage account. | [optional] 
**credentials_secret** | **str** | Optional. The Resource name of a secret in Secret Manager. The Azure SAS token must be stored in Secret Manager in JSON format: { \&quot;sas_token\&quot; : \&quot;SAS_TOKEN\&quot; } GoogleServiceAccount must be granted &#x60;roles/secretmanager.secretAccessor&#x60; for the resource. See [Configure access to a source: Microsoft Azure Blob Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret_manager) for more information. If &#x60;credentials_secret&#x60; is specified, do not specify azure_credentials. This feature is in [preview](https://cloud.google.com/terms/service-terms#1). Format: &#x60;projects/{project_number}/secrets/{secret_name}&#x60; | [optional] 
**path** | **str** | Root path to transfer objects. Must be an empty string or full path name that ends with a &#39;/&#39;. This field is treated as an object prefix. As such, it should generally not begin with a &#39;/&#39;. | [optional] 
**storage_account** | **str** | Required. The name of the Azure Storage account. | [optional] 

## Example

```python
from openapi_client.models.azure_blob_storage_data import AzureBlobStorageData

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobStorageData from a JSON string
azure_blob_storage_data_instance = AzureBlobStorageData.from_json(json)
# print the JSON string representation of the object
print(AzureBlobStorageData.to_json())

# convert the object into a dict
azure_blob_storage_data_dict = azure_blob_storage_data_instance.to_dict()
# create an instance of AzureBlobStorageData from a dict
azure_blob_storage_data_from_dict = AzureBlobStorageData.from_dict(azure_blob_storage_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


