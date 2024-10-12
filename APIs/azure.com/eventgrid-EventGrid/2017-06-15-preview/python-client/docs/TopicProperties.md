# TopicProperties

Properties of the Topic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | Endpoint for the topic. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the topic. | [optional] [readonly] 

## Example

```python
from openapi_client.models.topic_properties import TopicProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TopicProperties from a JSON string
topic_properties_instance = TopicProperties.from_json(json)
# print the JSON string representation of the object
print(TopicProperties.to_json())

# convert the object into a dict
topic_properties_dict = topic_properties_instance.to_dict()
# create an instance of TopicProperties from a dict
topic_properties_from_dict = TopicProperties.from_dict(topic_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


