# RuntimeConfig

RuntimeConfig is the singleton resource of each location. It includes generic resource configs consumed by control plane and runtime plane like: pub/sub topic/subscription resource name, Cloud Storage location storing schema etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connd_subscription** | **str** | Output only. Pub/Sub subscription for connd to receive message. E.g. projects/{project-id}/subscriptions/{topic-id} | [optional] [readonly] 
**connd_topic** | **str** | Output only. Pub/Sub topic for connd to send message. E.g. projects/{project-id}/topics/{topic-id} | [optional] [readonly] 
**control_plane_subscription** | **str** | Output only. Pub/Sub subscription for control plane to receive message. E.g. projects/{project-id}/subscriptions/{topic-id} | [optional] [readonly] 
**control_plane_topic** | **str** | Output only. Pub/Sub topic for control plne to send message. communication. E.g. projects/{project-id}/topics/{topic-id} | [optional] [readonly] 
**location_id** | **str** | Output only. location_id of the runtime location. E.g. \&quot;us-west1\&quot;. | [optional] [readonly] 
**name** | **str** | Output only. Name of the runtimeConfig resource. Format: projects/{project}/locations/{location}/runtimeConfig | [optional] [readonly] 
**runtime_endpoint** | **str** | Output only. The endpoint of the connectors runtime ingress. | [optional] [readonly] 
**schema_gcs_bucket** | **str** | Output only. The Cloud Storage bucket that stores connector&#39;s schema reports. | [optional] [readonly] 
**service_directory** | **str** | Output only. The name of the Service Directory service name. | [optional] [readonly] 
**state** | **str** | Output only. The state of the location. | [optional] [readonly] 

## Example

```python
from openapi_client.models.runtime_config import RuntimeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeConfig from a JSON string
runtime_config_instance = RuntimeConfig.from_json(json)
# print the JSON string representation of the object
print(RuntimeConfig.to_json())

# convert the object into a dict
runtime_config_dict = runtime_config_instance.to_dict()
# create an instance of RuntimeConfig from a dict
runtime_config_from_dict = RuntimeConfig.from_dict(runtime_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


