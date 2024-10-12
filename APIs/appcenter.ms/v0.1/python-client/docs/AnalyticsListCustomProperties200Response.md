# AnalyticsListCustomProperties200Response

List of device properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **Dict[str, str]** | List of device properties. | 

## Example

```python
from openapi_client.models.analytics_list_custom_properties200_response import AnalyticsListCustomProperties200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsListCustomProperties200Response from a JSON string
analytics_list_custom_properties200_response_instance = AnalyticsListCustomProperties200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsListCustomProperties200Response.to_json())

# convert the object into a dict
analytics_list_custom_properties200_response_dict = analytics_list_custom_properties200_response_instance.to_dict()
# create an instance of AnalyticsListCustomProperties200Response from a dict
analytics_list_custom_properties200_response_from_dict = AnalyticsListCustomProperties200Response.from_dict(analytics_list_custom_properties200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


