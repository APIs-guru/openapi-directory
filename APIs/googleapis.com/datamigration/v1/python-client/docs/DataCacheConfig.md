# DataCacheConfig

Data cache is an optional feature available for Cloud SQL for MySQL Enterprise Plus edition only. For more information on data cache, see [Data cache overview](https://cloud.google.com/sql/help/mysql-data-cache) in Cloud SQL documentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_cache_enabled** | **bool** | Optional. Whether data cache is enabled for the instance. | [optional] 

## Example

```python
from openapi_client.models.data_cache_config import DataCacheConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DataCacheConfig from a JSON string
data_cache_config_instance = DataCacheConfig.from_json(json)
# print the JSON string representation of the object
print(DataCacheConfig.to_json())

# convert the object into a dict
data_cache_config_dict = data_cache_config_instance.to_dict()
# create an instance of DataCacheConfig from a dict
data_cache_config_from_dict = DataCacheConfig.from_dict(data_cache_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


