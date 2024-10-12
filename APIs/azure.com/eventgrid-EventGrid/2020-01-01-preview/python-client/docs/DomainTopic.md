# DomainTopic

Domain Topic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DomainTopicProperties**](DomainTopicProperties.md) |  | [optional] 
**id** | **str** | Fully qualified identifier of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**type** | **str** | Type of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.domain_topic import DomainTopic

# TODO update the JSON string below
json = "{}"
# create an instance of DomainTopic from a JSON string
domain_topic_instance = DomainTopic.from_json(json)
# print the JSON string representation of the object
print(DomainTopic.to_json())

# convert the object into a dict
domain_topic_dict = domain_topic_instance.to_dict()
# create an instance of DomainTopic from a dict
domain_topic_from_dict = DomainTopic.from_dict(domain_topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


