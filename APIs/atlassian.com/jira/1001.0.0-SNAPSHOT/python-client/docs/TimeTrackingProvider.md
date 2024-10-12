# TimeTrackingProvider

Details about the time tracking provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key for the time tracking provider. For example, *JIRA*. | 
**name** | **str** | The name of the time tracking provider. For example, *JIRA provided time tracking*. | [optional] 
**url** | **str** | The URL of the configuration page for the time tracking provider app. For example, */example/config/url*. This property is only returned if the &#x60;adminPageKey&#x60; property is set in the module descriptor of the time tracking provider app. | [optional] [readonly] 

## Example

```python
from openapi_client.models.time_tracking_provider import TimeTrackingProvider

# TODO update the JSON string below
json = "{}"
# create an instance of TimeTrackingProvider from a JSON string
time_tracking_provider_instance = TimeTrackingProvider.from_json(json)
# print the JSON string representation of the object
print(TimeTrackingProvider.to_json())

# convert the object into a dict
time_tracking_provider_dict = time_tracking_provider_instance.to_dict()
# create an instance of TimeTrackingProvider from a dict
time_tracking_provider_from_dict = TimeTrackingProvider.from_dict(time_tracking_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


