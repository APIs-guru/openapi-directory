# RealtimeConfiguration

Holds the available configuration options for an Azure ML web service endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_concurrent_calls** | **int** | Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200. | [optional] 

## Example

```python
from openapi_client.models.realtime_configuration import RealtimeConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of RealtimeConfiguration from a JSON string
realtime_configuration_instance = RealtimeConfiguration.from_json(json)
# print the JSON string representation of the object
print(RealtimeConfiguration.to_json())

# convert the object into a dict
realtime_configuration_dict = realtime_configuration_instance.to_dict()
# create an instance of RealtimeConfiguration from a dict
realtime_configuration_from_dict = RealtimeConfiguration.from_dict(realtime_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


