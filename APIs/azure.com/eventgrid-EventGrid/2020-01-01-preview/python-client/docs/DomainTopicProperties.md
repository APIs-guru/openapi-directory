# DomainTopicProperties

Properties of the Domain Topic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Provisioning state of the domain topic. | [optional] 

## Example

```python
from openapi_client.models.domain_topic_properties import DomainTopicProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DomainTopicProperties from a JSON string
domain_topic_properties_instance = DomainTopicProperties.from_json(json)
# print the JSON string representation of the object
print(DomainTopicProperties.to_json())

# convert the object into a dict
domain_topic_properties_dict = domain_topic_properties_instance.to_dict()
# create an instance of DomainTopicProperties from a dict
domain_topic_properties_from_dict = DomainTopicProperties.from_dict(domain_topic_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


