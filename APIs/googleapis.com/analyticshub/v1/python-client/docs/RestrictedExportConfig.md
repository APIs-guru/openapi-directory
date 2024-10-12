# RestrictedExportConfig

Restricted export config, used to configure restricted export on linked dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Optional. If true, enable restricted export. | [optional] 
**restrict_direct_table_access** | **bool** | Output only. If true, restrict direct table access(read api/tabledata.list) on linked table. | [optional] [readonly] 
**restrict_query_result** | **bool** | Optional. If true, restrict export of query result derived from restricted linked dataset table. | [optional] 

## Example

```python
from openapi_client.models.restricted_export_config import RestrictedExportConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RestrictedExportConfig from a JSON string
restricted_export_config_instance = RestrictedExportConfig.from_json(json)
# print the JSON string representation of the object
print(RestrictedExportConfig.to_json())

# convert the object into a dict
restricted_export_config_dict = restricted_export_config_instance.to_dict()
# create an instance of RestrictedExportConfig from a dict
restricted_export_config_from_dict = RestrictedExportConfig.from_dict(restricted_export_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


