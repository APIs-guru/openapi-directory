# TopicUpdateParameters

Properties of the Topic update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Tags of the resource | [optional] 

## Example

```python
from openapi_client.models.topic_update_parameters import TopicUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TopicUpdateParameters from a JSON string
topic_update_parameters_instance = TopicUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TopicUpdateParameters.to_json())

# convert the object into a dict
topic_update_parameters_dict = topic_update_parameters_instance.to_dict()
# create an instance of TopicUpdateParameters from a dict
topic_update_parameters_from_dict = TopicUpdateParameters.from_dict(topic_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


