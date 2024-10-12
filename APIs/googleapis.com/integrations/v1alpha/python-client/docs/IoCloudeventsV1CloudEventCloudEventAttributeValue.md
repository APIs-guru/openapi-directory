# IoCloudeventsV1CloudEventCloudEventAttributeValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ce_boolean** | **bool** |  | [optional] 
**ce_bytes** | **bytearray** |  | [optional] 
**ce_integer** | **int** |  | [optional] 
**ce_string** | **str** |  | [optional] 
**ce_timestamp** | **str** |  | [optional] 
**ce_uri** | **str** |  | [optional] 
**ce_uri_ref** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.io_cloudevents_v1_cloud_event_cloud_event_attribute_value import IoCloudeventsV1CloudEventCloudEventAttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of IoCloudeventsV1CloudEventCloudEventAttributeValue from a JSON string
io_cloudevents_v1_cloud_event_cloud_event_attribute_value_instance = IoCloudeventsV1CloudEventCloudEventAttributeValue.from_json(json)
# print the JSON string representation of the object
print(IoCloudeventsV1CloudEventCloudEventAttributeValue.to_json())

# convert the object into a dict
io_cloudevents_v1_cloud_event_cloud_event_attribute_value_dict = io_cloudevents_v1_cloud_event_cloud_event_attribute_value_instance.to_dict()
# create an instance of IoCloudeventsV1CloudEventCloudEventAttributeValue from a dict
io_cloudevents_v1_cloud_event_cloud_event_attribute_value_from_dict = IoCloudeventsV1CloudEventCloudEventAttributeValue.from_dict(io_cloudevents_v1_cloud_event_cloud_event_attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


