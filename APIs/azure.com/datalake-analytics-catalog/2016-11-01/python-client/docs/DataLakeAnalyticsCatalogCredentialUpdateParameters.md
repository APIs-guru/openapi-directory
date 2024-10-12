# DataLakeAnalyticsCatalogCredentialUpdateParameters

Data Lake Analytics catalog credential update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** | the new password for the credential and user with access to the data source. | [optional] 
**password** | **str** | the current password for the credential and user with access to the data source. This is required if the requester is not the account owner. | [optional] 
**uri** | **str** | the URI identifier for the data source this credential can connect to in the format &lt;hostname&gt;:&lt;port&gt; | [optional] 
**user_id** | **str** | the object identifier for the user associated with this credential with access to the data source. | [optional] 

## Example

```python
from openapi_client.models.data_lake_analytics_catalog_credential_update_parameters import DataLakeAnalyticsCatalogCredentialUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsCatalogCredentialUpdateParameters from a JSON string
data_lake_analytics_catalog_credential_update_parameters_instance = DataLakeAnalyticsCatalogCredentialUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsCatalogCredentialUpdateParameters.to_json())

# convert the object into a dict
data_lake_analytics_catalog_credential_update_parameters_dict = data_lake_analytics_catalog_credential_update_parameters_instance.to_dict()
# create an instance of DataLakeAnalyticsCatalogCredentialUpdateParameters from a dict
data_lake_analytics_catalog_credential_update_parameters_from_dict = DataLakeAnalyticsCatalogCredentialUpdateParameters.from_dict(data_lake_analytics_catalog_credential_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


