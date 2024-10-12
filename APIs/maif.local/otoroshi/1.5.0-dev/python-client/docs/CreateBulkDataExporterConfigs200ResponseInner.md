# CreateBulkDataExporterConfigs200ResponseInner

The bulk response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **bool** | Whether the action was carried out correctly or not | [optional] 
**id** | **bool** | Data exporter id | [optional] 
**status** | **str** | Status | [optional] 

## Example

```python
from openapi_client.models.create_bulk_data_exporter_configs200_response_inner import CreateBulkDataExporterConfigs200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBulkDataExporterConfigs200ResponseInner from a JSON string
create_bulk_data_exporter_configs200_response_inner_instance = CreateBulkDataExporterConfigs200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(CreateBulkDataExporterConfigs200ResponseInner.to_json())

# convert the object into a dict
create_bulk_data_exporter_configs200_response_inner_dict = create_bulk_data_exporter_configs200_response_inner_instance.to_dict()
# create an instance of CreateBulkDataExporterConfigs200ResponseInner from a dict
create_bulk_data_exporter_configs200_response_inner_from_dict = CreateBulkDataExporterConfigs200ResponseInner.from_dict(create_bulk_data_exporter_configs200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


