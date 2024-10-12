# TopicCreateOrUpdateParameters

Parameters supplied to the Create Or Update Topic operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource. | 
**name** | **str** | Topic name. | [optional] 
**properties** | [**TopicProperties**](TopicProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.topic_create_or_update_parameters import TopicCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TopicCreateOrUpdateParameters from a JSON string
topic_create_or_update_parameters_instance = TopicCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TopicCreateOrUpdateParameters.to_json())

# convert the object into a dict
topic_create_or_update_parameters_dict = topic_create_or_update_parameters_instance.to_dict()
# create an instance of TopicCreateOrUpdateParameters from a dict
topic_create_or_update_parameters_from_dict = TopicCreateOrUpdateParameters.from_dict(topic_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


