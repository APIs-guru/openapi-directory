# EventPublishConfig

Confirguration of PubSubEventWriter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Required. Option to enable Event Publishing. | [optional] 
**topic** | **str** | Required. The resource name of the Pub/Sub topic. Format: projects/{project_id}/topics/{topic_id} | [optional] 

## Example

```python
from openapi_client.models.event_publish_config import EventPublishConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EventPublishConfig from a JSON string
event_publish_config_instance = EventPublishConfig.from_json(json)
# print the JSON string representation of the object
print(EventPublishConfig.to_json())

# convert the object into a dict
event_publish_config_dict = event_publish_config_instance.to_dict()
# create an instance of EventPublishConfig from a dict
event_publish_config_from_dict = EventPublishConfig.from_dict(event_publish_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


