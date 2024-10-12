# ExportConfig

Configuration for a Pub/Sub Lite subscription that writes messages to a destination. User subscriber clients must not connect to this subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_state** | **str** | Output only. The current state of the export, which may be different to the desired state due to errors. This field is output only. | [optional] [readonly] 
**dead_letter_topic** | **str** | Optional. The name of an optional Pub/Sub Lite topic to publish messages that can not be exported to the destination. For example, the message can not be published to the Pub/Sub service because it does not satisfy the constraints documented at https://cloud.google.com/pubsub/docs/publisher. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id}. Must be within the same project and location as the subscription. The topic may be changed or removed. | [optional] 
**desired_state** | **str** | The desired state of this export. Setting this to values other than &#x60;ACTIVE&#x60; and &#x60;PAUSED&#x60; will result in an error. | [optional] 
**pubsub_config** | [**PubSubConfig**](PubSubConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_config import ExportConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExportConfig from a JSON string
export_config_instance = ExportConfig.from_json(json)
# print the JSON string representation of the object
print(ExportConfig.to_json())

# convert the object into a dict
export_config_dict = export_config_instance.to_dict()
# create an instance of ExportConfig from a dict
export_config_from_dict = ExportConfig.from_dict(export_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


