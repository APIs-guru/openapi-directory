# ExtensionGetMonitoringStatusDefaultResponse

Describes the format of Error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.extension_get_monitoring_status_default_response import ExtensionGetMonitoringStatusDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionGetMonitoringStatusDefaultResponse from a JSON string
extension_get_monitoring_status_default_response_instance = ExtensionGetMonitoringStatusDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ExtensionGetMonitoringStatusDefaultResponse.to_json())

# convert the object into a dict
extension_get_monitoring_status_default_response_dict = extension_get_monitoring_status_default_response_instance.to_dict()
# create an instance of ExtensionGetMonitoringStatusDefaultResponse from a dict
extension_get_monitoring_status_default_response_from_dict = ExtensionGetMonitoringStatusDefaultResponse.from_dict(extension_get_monitoring_status_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


