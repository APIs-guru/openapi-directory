# Topic

EventGrid Topic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TopicProperties**](TopicProperties.md) |  | [optional] 
**location** | **str** | Location of the resource. | 
**tags** | **Dict[str, str]** | Tags of the resource. | [optional] 
**id** | **str** | Fully qualified identifier of the resource. | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**type** | **str** | Type of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.topic import Topic

# TODO update the JSON string below
json = "{}"
# create an instance of Topic from a JSON string
topic_instance = Topic.from_json(json)
# print the JSON string representation of the object
print(Topic.to_json())

# convert the object into a dict
topic_dict = topic_instance.to_dict()
# create an instance of Topic from a dict
topic_from_dict = Topic.from_dict(topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


