# GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total number of devices per model | [optional] 
**model** | **str** | The device model | [optional] 
**usage** | [**GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInnerUsage**](GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInnerUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_devices_models_by_usage200_response_inner import GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner from a JSON string
get_organization_summary_top_devices_models_by_usage200_response_inner_instance = GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner.to_json())

# convert the object into a dict
get_organization_summary_top_devices_models_by_usage200_response_inner_dict = get_organization_summary_top_devices_models_by_usage200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner from a dict
get_organization_summary_top_devices_models_by_usage200_response_inner_from_dict = GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner.from_dict(get_organization_summary_top_devices_models_by_usage200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


