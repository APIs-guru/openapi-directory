# MetadataIntegration

Specifies how metastore metadata should be integrated with external services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_catalog_config** | [**DataCatalogConfig**](DataCatalogConfig.md) |  | [optional] 
**dataplex_config** | [**DataplexConfig**](DataplexConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.metadata_integration import MetadataIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataIntegration from a JSON string
metadata_integration_instance = MetadataIntegration.from_json(json)
# print the JSON string representation of the object
print(MetadataIntegration.to_json())

# convert the object into a dict
metadata_integration_dict = metadata_integration_instance.to_dict()
# create an instance of MetadataIntegration from a dict
metadata_integration_from_dict = MetadataIntegration.from_dict(metadata_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


