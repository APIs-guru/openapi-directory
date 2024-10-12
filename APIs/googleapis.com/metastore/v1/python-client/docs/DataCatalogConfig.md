# DataCatalogConfig

Specifies how metastore metadata should be integrated with the Data Catalog service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Optional. Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog. | [optional] 

## Example

```python
from openapi_client.models.data_catalog_config import DataCatalogConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DataCatalogConfig from a JSON string
data_catalog_config_instance = DataCatalogConfig.from_json(json)
# print the JSON string representation of the object
print(DataCatalogConfig.to_json())

# convert the object into a dict
data_catalog_config_dict = data_catalog_config_instance.to_dict()
# create an instance of DataCatalogConfig from a dict
data_catalog_config_from_dict = DataCatalogConfig.from_dict(data_catalog_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


