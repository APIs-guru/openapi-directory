# TopicTypeProperties

Properties of a topic type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the topic type. | [optional] 
**display_name** | **str** | Display Name for the topic type. | [optional] 
**provider** | **str** | Namespace of the provider of the topic type. | [optional] 
**provisioning_state** | **str** | Provisioning state of the topic type | [optional] 
**resource_region_type** | **str** | Region type of the resource. | [optional] 
**source_resource_format** | **str** | Source resource format. | [optional] 
**supported_locations** | **List[str]** | List of locations supported by this topic type. | [optional] 

## Example

```python
from openapi_client.models.topic_type_properties import TopicTypeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TopicTypeProperties from a JSON string
topic_type_properties_instance = TopicTypeProperties.from_json(json)
# print the JSON string representation of the object
print(TopicTypeProperties.to_json())

# convert the object into a dict
topic_type_properties_dict = topic_type_properties_instance.to_dict()
# create an instance of TopicTypeProperties from a dict
topic_type_properties_from_dict = TopicTypeProperties.from_dict(topic_type_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


