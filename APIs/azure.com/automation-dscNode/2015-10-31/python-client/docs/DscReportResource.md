# DscReportResource

Definition of the DSC Report Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depends_on** | [**List[DscReportResourceNavigation]**](DscReportResourceNavigation.md) | Gets or sets the Resource Navigation values for resources the resource depends on. | [optional] 
**duration_in_seconds** | **float** | Gets or sets the duration in seconds for the resource. | [optional] 
**error** | **str** | Gets or sets the error of the resource. | [optional] 
**module_name** | **str** | Gets or sets the module name of the resource. | [optional] 
**module_version** | **str** | Gets or sets the module version of the resource. | [optional] 
**resource_id** | **str** | Gets or sets the ID of the resource. | [optional] 
**resource_name** | **str** | Gets or sets the name of the resource. | [optional] 
**source_info** | **str** | Gets or sets the source info of the resource. | [optional] 
**start_date** | **datetime** | Gets or sets the start date of the resource. | [optional] 
**status** | **str** | Gets or sets the status of the resource. | [optional] 

## Example

```python
from openapi_client.models.dsc_report_resource import DscReportResource

# TODO update the JSON string below
json = "{}"
# create an instance of DscReportResource from a JSON string
dsc_report_resource_instance = DscReportResource.from_json(json)
# print the JSON string representation of the object
print(DscReportResource.to_json())

# convert the object into a dict
dsc_report_resource_dict = dsc_report_resource_instance.to_dict()
# create an instance of DscReportResource from a dict
dsc_report_resource_from_dict = DscReportResource.from_dict(dsc_report_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


