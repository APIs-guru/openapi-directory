# DataLakeAnalyticsCatalogCredentialDeleteParameters

Data Lake Analytics catalog credential deletion parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | the current password for the credential and user with access to the data source. This is required if the requester is not the account owner. | [optional] 

## Example

```python
from openapi_client.models.data_lake_analytics_catalog_credential_delete_parameters import DataLakeAnalyticsCatalogCredentialDeleteParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsCatalogCredentialDeleteParameters from a JSON string
data_lake_analytics_catalog_credential_delete_parameters_instance = DataLakeAnalyticsCatalogCredentialDeleteParameters.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsCatalogCredentialDeleteParameters.to_json())

# convert the object into a dict
data_lake_analytics_catalog_credential_delete_parameters_dict = data_lake_analytics_catalog_credential_delete_parameters_instance.to_dict()
# create an instance of DataLakeAnalyticsCatalogCredentialDeleteParameters from a dict
data_lake_analytics_catalog_credential_delete_parameters_from_dict = DataLakeAnalyticsCatalogCredentialDeleteParameters.from_dict(data_lake_analytics_catalog_credential_delete_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


