# TopicTypeInfo

Properties of a topic type info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TopicTypeProperties**](TopicTypeProperties.md) |  | [optional] 
**id** | **str** | Fully qualified identifier of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**type** | **str** | Type of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.topic_type_info import TopicTypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TopicTypeInfo from a JSON string
topic_type_info_instance = TopicTypeInfo.from_json(json)
# print the JSON string representation of the object
print(TopicTypeInfo.to_json())

# convert the object into a dict
topic_type_info_dict = topic_type_info_instance.to_dict()
# create an instance of TopicTypeInfo from a dict
topic_type_info_from_dict = TopicTypeInfo.from_dict(topic_type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


