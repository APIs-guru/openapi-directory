# AzureBlobConnectorProperties

The Azure Blob connector properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_key_vault_url** | **str** | The connection KeyVault URL. | 

## Example

```python
from openapi_client.models.azure_blob_connector_properties import AzureBlobConnectorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobConnectorProperties from a JSON string
azure_blob_connector_properties_instance = AzureBlobConnectorProperties.from_json(json)
# print the JSON string representation of the object
print(AzureBlobConnectorProperties.to_json())

# convert the object into a dict
azure_blob_connector_properties_dict = azure_blob_connector_properties_instance.to_dict()
# create an instance of AzureBlobConnectorProperties from a dict
azure_blob_connector_properties_from_dict = AzureBlobConnectorProperties.from_dict(azure_blob_connector_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


