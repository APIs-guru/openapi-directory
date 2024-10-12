# DataLakeAnalyticsCatalogCredentialCreateParameters

Data Lake Analytics catalog credential creation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | the password for the credential and user with access to the data source. | 
**uri** | **str** | the URI identifier for the data source this credential can connect to in the format &lt;hostname&gt;:&lt;port&gt; | 
**user_id** | **str** | the object identifier for the user associated with this credential with access to the data source. | 

## Example

```python
from openapi_client.models.data_lake_analytics_catalog_credential_create_parameters import DataLakeAnalyticsCatalogCredentialCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsCatalogCredentialCreateParameters from a JSON string
data_lake_analytics_catalog_credential_create_parameters_instance = DataLakeAnalyticsCatalogCredentialCreateParameters.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsCatalogCredentialCreateParameters.to_json())

# convert the object into a dict
data_lake_analytics_catalog_credential_create_parameters_dict = data_lake_analytics_catalog_credential_create_parameters_instance.to_dict()
# create an instance of DataLakeAnalyticsCatalogCredentialCreateParameters from a dict
data_lake_analytics_catalog_credential_create_parameters_from_dict = DataLakeAnalyticsCatalogCredentialCreateParameters.from_dict(data_lake_analytics_catalog_credential_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


