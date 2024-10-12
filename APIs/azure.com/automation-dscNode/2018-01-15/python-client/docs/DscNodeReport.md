# DscNodeReport

Definition of the dsc node report type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_version** | **str** | Gets or sets the configurationVersion of the node report. | [optional] 
**end_time** | **datetime** | Gets or sets the end time of the node report. | [optional] 
**errors** | [**List[DscReportError]**](DscReportError.md) | Gets or sets the errors for the node report. | [optional] 
**host_name** | **str** | Gets or sets the hostname of the node that sent the report. | [optional] 
**i_pv4_addresses** | **List[str]** | Gets or sets the IPv4 address of the node that sent the report. | [optional] 
**i_pv6_addresses** | **List[str]** | Gets or sets the IPv6 address of the node that sent the report. | [optional] 
**id** | **str** | Gets or sets the id. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the lastModifiedTime of the node report. | [optional] 
**meta_configuration** | [**DscMetaConfiguration**](DscMetaConfiguration.md) |  | [optional] 
**number_of_resources** | **int** | Gets or sets the number of resource in the node report. | [optional] 
**raw_errors** | **str** | Gets or sets the unparsed errors for the node report. | [optional] 
**reboot_requested** | **str** | Gets or sets the rebootRequested of the node report. | [optional] 
**refresh_mode** | **str** | Gets or sets the refreshMode of the node report. | [optional] 
**report_format_version** | **str** | Gets or sets the reportFormatVersion of the node report. | [optional] 
**report_id** | **str** | Gets or sets the id of the node report. | [optional] 
**resources** | [**List[DscReportResource]**](DscReportResource.md) | Gets or sets the resource for the node report. | [optional] 
**start_time** | **datetime** | Gets or sets the start time of the node report. | [optional] 
**status** | **str** | Gets or sets the status of the node report. | [optional] 
**type** | **str** | Gets or sets the type of the node report. | [optional] 

## Example

```python
from openapi_client.models.dsc_node_report import DscNodeReport

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeReport from a JSON string
dsc_node_report_instance = DscNodeReport.from_json(json)
# print the JSON string representation of the object
print(DscNodeReport.to_json())

# convert the object into a dict
dsc_node_report_dict = dsc_node_report_instance.to_dict()
# create an instance of DscNodeReport from a dict
dsc_node_report_from_dict = DscNodeReport.from_dict(dsc_node_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


