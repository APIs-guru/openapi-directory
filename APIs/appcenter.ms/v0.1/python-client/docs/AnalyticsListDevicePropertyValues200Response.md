# AnalyticsListDevicePropertyValues200Response

List of device property values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | List of device property values. | 

## Example

```python
from openapi_client.models.analytics_list_device_property_values200_response import AnalyticsListDevicePropertyValues200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsListDevicePropertyValues200Response from a JSON string
analytics_list_device_property_values200_response_instance = AnalyticsListDevicePropertyValues200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsListDevicePropertyValues200Response.to_json())

# convert the object into a dict
analytics_list_device_property_values200_response_dict = analytics_list_device_property_values200_response_instance.to_dict()
# create an instance of AnalyticsListDevicePropertyValues200Response from a dict
analytics_list_device_property_values200_response_from_dict = AnalyticsListDevicePropertyValues200Response.from_dict(analytics_list_device_property_values200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


