# ApiMonitorStatusCodeGetCollection200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hydramember** | [**List[MonitorStatusCodeJsonldGet]**](MonitorStatusCodeJsonldGet.md) |  | 
**hydrasearch** | [**ApiAlertLogGetCollection200ResponseHydraSearch**](ApiAlertLogGetCollection200ResponseHydraSearch.md) |  | [optional] 
**hydratotal_items** | **int** |  | [optional] 
**hydraview** | [**ApiAlertLogGetCollection200ResponseHydraView**](ApiAlertLogGetCollection200ResponseHydraView.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_monitor_status_code_get_collection200_response import ApiMonitorStatusCodeGetCollection200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiMonitorStatusCodeGetCollection200Response from a JSON string
api_monitor_status_code_get_collection200_response_instance = ApiMonitorStatusCodeGetCollection200Response.from_json(json)
# print the JSON string representation of the object
print(ApiMonitorStatusCodeGetCollection200Response.to_json())

# convert the object into a dict
api_monitor_status_code_get_collection200_response_dict = api_monitor_status_code_get_collection200_response_instance.to_dict()
# create an instance of ApiMonitorStatusCodeGetCollection200Response from a dict
api_monitor_status_code_get_collection200_response_from_dict = ApiMonitorStatusCodeGetCollection200Response.from_dict(api_monitor_status_code_get_collection200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


