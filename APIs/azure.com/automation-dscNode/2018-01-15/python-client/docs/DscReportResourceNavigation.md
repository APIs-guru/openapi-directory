# DscReportResourceNavigation

Navigation for DSC Report Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | **str** | Gets or sets the ID of the resource to navigate to. | [optional] 

## Example

```python
from openapi_client.models.dsc_report_resource_navigation import DscReportResourceNavigation

# TODO update the JSON string below
json = "{}"
# create an instance of DscReportResourceNavigation from a JSON string
dsc_report_resource_navigation_instance = DscReportResourceNavigation.from_json(json)
# print the JSON string representation of the object
print(DscReportResourceNavigation.to_json())

# convert the object into a dict
dsc_report_resource_navigation_dict = dsc_report_resource_navigation_instance.to_dict()
# create an instance of DscReportResourceNavigation from a dict
dsc_report_resource_navigation_from_dict = DscReportResourceNavigation.from_dict(dsc_report_resource_navigation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


