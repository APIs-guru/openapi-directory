# NiRealtimeData

Real time data about the `number`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_status** | **str** | Whether the end-user&#39;s phone number is active within an operator&#39;s &#x60;network&#x60;. Can be &#x60;active&#x60;, &#x60;inactive&#x60; or null. | [optional] 
**handset_status** | **str** | Whether the end-user&#39;s handset is turned on or off. | [optional] 

## Example

```python
from openapi_client.models.ni_realtime_data import NiRealtimeData

# TODO update the JSON string below
json = "{}"
# create an instance of NiRealtimeData from a JSON string
ni_realtime_data_instance = NiRealtimeData.from_json(json)
# print the JSON string representation of the object
print(NiRealtimeData.to_json())

# convert the object into a dict
ni_realtime_data_dict = ni_realtime_data_instance.to_dict()
# create an instance of NiRealtimeData from a dict
ni_realtime_data_from_dict = NiRealtimeData.from_dict(ni_realtime_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


