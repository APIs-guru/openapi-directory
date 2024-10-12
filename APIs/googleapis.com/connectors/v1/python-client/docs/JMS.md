# JMS

JMS message denotes the source of the event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. Name of the JMS source. i.e. queueName or topicName | [optional] 
**type** | **str** | Optional. Type of the JMS Source. i.e. Queue or Topic | [optional] 

## Example

```python
from openapi_client.models.jms import JMS

# TODO update the JSON string below
json = "{}"
# create an instance of JMS from a JSON string
jms_instance = JMS.from_json(json)
# print the JSON string representation of the object
print(JMS.to_json())

# convert the object into a dict
jms_dict = jms_instance.to_dict()
# create an instance of JMS from a dict
jms_from_dict = JMS.from_dict(jms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


