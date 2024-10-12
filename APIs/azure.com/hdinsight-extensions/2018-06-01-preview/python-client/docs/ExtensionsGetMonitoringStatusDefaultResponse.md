# ExtensionsGetMonitoringStatusDefaultResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.extensions_get_monitoring_status_default_response import ExtensionsGetMonitoringStatusDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionsGetMonitoringStatusDefaultResponse from a JSON string
extensions_get_monitoring_status_default_response_instance = ExtensionsGetMonitoringStatusDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ExtensionsGetMonitoringStatusDefaultResponse.to_json())

# convert the object into a dict
extensions_get_monitoring_status_default_response_dict = extensions_get_monitoring_status_default_response_instance.to_dict()
# create an instance of ExtensionsGetMonitoringStatusDefaultResponse from a dict
extensions_get_monitoring_status_default_response_from_dict = ExtensionsGetMonitoringStatusDefaultResponse.from_dict(extensions_get_monitoring_status_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


