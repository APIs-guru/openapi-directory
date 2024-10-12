# DeletebulkDataExporterConfig200ResponseInner

The bulk response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | Whether the action was carried out correctly or not | [optional] 
**id** | **bool** | Data exporter id | [optional] 
**status** | **str** | Status | [optional] 

## Example

```python
from openapi_client.models.deletebulk_data_exporter_config200_response_inner import DeletebulkDataExporterConfig200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of DeletebulkDataExporterConfig200ResponseInner from a JSON string
deletebulk_data_exporter_config200_response_inner_instance = DeletebulkDataExporterConfig200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(DeletebulkDataExporterConfig200ResponseInner.to_json())

# convert the object into a dict
deletebulk_data_exporter_config200_response_inner_dict = deletebulk_data_exporter_config200_response_inner_instance.to_dict()
# create an instance of DeletebulkDataExporterConfig200ResponseInner from a dict
deletebulk_data_exporter_config200_response_inner_from_dict = DeletebulkDataExporterConfig200ResponseInner.from_dict(deletebulk_data_exporter_config200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


