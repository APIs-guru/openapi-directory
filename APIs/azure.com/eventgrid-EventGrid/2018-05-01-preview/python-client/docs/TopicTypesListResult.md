# TopicTypesListResult

Result of the List Topic Types operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[TopicTypeInfo]**](TopicTypeInfo.md) | A collection of topic types | [optional] 

## Example

```python
from openapi_client.models.topic_types_list_result import TopicTypesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TopicTypesListResult from a JSON string
topic_types_list_result_instance = TopicTypesListResult.from_json(json)
# print the JSON string representation of the object
print(TopicTypesListResult.to_json())

# convert the object into a dict
topic_types_list_result_dict = topic_types_list_result_instance.to_dict()
# create an instance of TopicTypesListResult from a dict
topic_types_list_result_from_dict = TopicTypesListResult.from_dict(topic_types_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


