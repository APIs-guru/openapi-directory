# UpdateBulkDataExporterConfig200ResponseInner

The bulk response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **bool** | Data exporter id | [optional] 
**status** | **str** | Status | [optional] 
**updated** | **bool** | Whether the action was carried out correctly or not | [optional] 

## Example

```python
from openapi_client.models.update_bulk_data_exporter_config200_response_inner import UpdateBulkDataExporterConfig200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBulkDataExporterConfig200ResponseInner from a JSON string
update_bulk_data_exporter_config200_response_inner_instance = UpdateBulkDataExporterConfig200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(UpdateBulkDataExporterConfig200ResponseInner.to_json())

# convert the object into a dict
update_bulk_data_exporter_config200_response_inner_dict = update_bulk_data_exporter_config200_response_inner_instance.to_dict()
# create an instance of UpdateBulkDataExporterConfig200ResponseInner from a dict
update_bulk_data_exporter_config200_response_inner_from_dict = UpdateBulkDataExporterConfig200ResponseInner.from_dict(update_bulk_data_exporter_config200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


