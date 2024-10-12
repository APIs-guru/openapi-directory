# GetOrganizationDevicesStatusesOverview200ResponseCountsByStatus

byStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerting** | **int** | alerting count | [optional] 
**dormant** | **int** | dormant count | [optional] 
**offline** | **int** | offline count | [optional] 
**online** | **int** | online count | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices_statuses_overview200_response_counts_by_status import GetOrganizationDevicesStatusesOverview200ResponseCountsByStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevicesStatusesOverview200ResponseCountsByStatus from a JSON string
get_organization_devices_statuses_overview200_response_counts_by_status_instance = GetOrganizationDevicesStatusesOverview200ResponseCountsByStatus.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevicesStatusesOverview200ResponseCountsByStatus.to_json())

# convert the object into a dict
get_organization_devices_statuses_overview200_response_counts_by_status_dict = get_organization_devices_statuses_overview200_response_counts_by_status_instance.to_dict()
# create an instance of GetOrganizationDevicesStatusesOverview200ResponseCountsByStatus from a dict
get_organization_devices_statuses_overview200_response_counts_by_status_from_dict = GetOrganizationDevicesStatusesOverview200ResponseCountsByStatus.from_dict(get_organization_devices_statuses_overview200_response_counts_by_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


