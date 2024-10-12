# DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters

Data Lake Analytics catalog secret creation and update parameters. This is deprecated and will be removed in the next release. Please use DataLakeAnalyticsCatalogCredentialCreateOrUpdateParameters instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | the password for the secret to pass in | 
**uri** | **str** | the URI identifier for the secret in the format &lt;hostname&gt;:&lt;port&gt; | [optional] 

## Example

```python
from openapi_client.models.data_lake_analytics_catalog_secret_create_or_update_parameters import DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters from a JSON string
data_lake_analytics_catalog_secret_create_or_update_parameters_instance = DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters.to_json())

# convert the object into a dict
data_lake_analytics_catalog_secret_create_or_update_parameters_dict = data_lake_analytics_catalog_secret_create_or_update_parameters_instance.to_dict()
# create an instance of DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters from a dict
data_lake_analytics_catalog_secret_create_or_update_parameters_from_dict = DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters.from_dict(data_lake_analytics_catalog_secret_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


