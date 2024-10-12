# TopicResource

Description of topic resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TopicProperties**](TopicProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.topic_resource import TopicResource

# TODO update the JSON string below
json = "{}"
# create an instance of TopicResource from a JSON string
topic_resource_instance = TopicResource.from_json(json)
# print the JSON string representation of the object
print(TopicResource.to_json())

# convert the object into a dict
topic_resource_dict = topic_resource_instance.to_dict()
# create an instance of TopicResource from a dict
topic_resource_from_dict = TopicResource.from_dict(topic_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


