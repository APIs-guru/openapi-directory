# IoCloudeventsV1CloudEvent

-- CloudEvent Context Attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Dict[str, IoCloudeventsV1CloudEventCloudEventAttributeValue]**](IoCloudeventsV1CloudEventCloudEventAttributeValue.md) | Optional &amp; Extension Attributes | [optional] 
**binary_data** | **bytearray** |  | [optional] 
**id** | **str** | Required Attributes | [optional] 
**proto_data** | **Dict[str, object]** |  | [optional] 
**source** | **str** | URI-reference | [optional] 
**spec_version** | **str** |  | [optional] 
**text_data** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.io_cloudevents_v1_cloud_event import IoCloudeventsV1CloudEvent

# TODO update the JSON string below
json = "{}"
# create an instance of IoCloudeventsV1CloudEvent from a JSON string
io_cloudevents_v1_cloud_event_instance = IoCloudeventsV1CloudEvent.from_json(json)
# print the JSON string representation of the object
print(IoCloudeventsV1CloudEvent.to_json())

# convert the object into a dict
io_cloudevents_v1_cloud_event_dict = io_cloudevents_v1_cloud_event_instance.to_dict()
# create an instance of IoCloudeventsV1CloudEvent from a dict
io_cloudevents_v1_cloud_event_from_dict = IoCloudeventsV1CloudEvent.from_dict(io_cloudevents_v1_cloud_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


