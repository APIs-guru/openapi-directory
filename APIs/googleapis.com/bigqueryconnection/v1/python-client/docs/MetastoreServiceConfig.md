# MetastoreServiceConfig

Configuration of the Dataproc Metastore Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metastore_service** | **str** | Optional. Resource name of an existing Dataproc Metastore service. Example: * &#x60;projects/[project_id]/locations/[region]/services/[service_id]&#x60; | [optional] 

## Example

```python
from openapi_client.models.metastore_service_config import MetastoreServiceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MetastoreServiceConfig from a JSON string
metastore_service_config_instance = MetastoreServiceConfig.from_json(json)
# print the JSON string representation of the object
print(MetastoreServiceConfig.to_json())

# convert the object into a dict
metastore_service_config_dict = metastore_service_config_instance.to_dict()
# create an instance of MetastoreServiceConfig from a dict
metastore_service_config_from_dict = MetastoreServiceConfig.from_dict(metastore_service_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


