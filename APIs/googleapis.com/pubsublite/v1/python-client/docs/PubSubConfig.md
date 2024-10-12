# PubSubConfig

Configuration for exporting to a Pub/Sub topic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **str** | The name of the Pub/Sub topic. Structured like: projects/{project_number}/topics/{topic_id}. The topic may be changed. | [optional] 

## Example

```python
from openapi_client.models.pub_sub_config import PubSubConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PubSubConfig from a JSON string
pub_sub_config_instance = PubSubConfig.from_json(json)
# print the JSON string representation of the object
print(PubSubConfig.to_json())

# convert the object into a dict
pub_sub_config_dict = pub_sub_config_instance.to_dict()
# create an instance of PubSubConfig from a dict
pub_sub_config_from_dict = PubSubConfig.from_dict(pub_sub_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


