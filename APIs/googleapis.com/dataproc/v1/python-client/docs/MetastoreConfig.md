# MetastoreConfig

Specifies a Metastore configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataproc_metastore_service** | **str** | Required. Resource name of an existing Dataproc Metastore service.Example: projects/[project_id]/locations/[dataproc_region]/services/[service-name] | [optional] 

## Example

```python
from openapi_client.models.metastore_config import MetastoreConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MetastoreConfig from a JSON string
metastore_config_instance = MetastoreConfig.from_json(json)
# print the JSON string representation of the object
print(MetastoreConfig.to_json())

# convert the object into a dict
metastore_config_dict = metastore_config_instance.to_dict()
# create an instance of MetastoreConfig from a dict
metastore_config_from_dict = MetastoreConfig.from_dict(metastore_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


