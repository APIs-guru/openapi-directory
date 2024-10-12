# ExportResourceUsageParameters

The parameters of the export operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_storage_absolute_sas_uri** | **str** | The blob storage absolute sas uri with write permission to the container which the usage data needs to be uploaded to. | [optional] 
**usage_start_date** | **datetime** | The start time of the usage. If not provided, usage will be reported since the beginning of data collection. | [optional] 

## Example

```python
from openapi_client.models.export_resource_usage_parameters import ExportResourceUsageParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ExportResourceUsageParameters from a JSON string
export_resource_usage_parameters_instance = ExportResourceUsageParameters.from_json(json)
# print the JSON string representation of the object
print(ExportResourceUsageParameters.to_json())

# convert the object into a dict
export_resource_usage_parameters_dict = export_resource_usage_parameters_instance.to_dict()
# create an instance of ExportResourceUsageParameters from a dict
export_resource_usage_parameters_from_dict = ExportResourceUsageParameters.from_dict(export_resource_usage_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


