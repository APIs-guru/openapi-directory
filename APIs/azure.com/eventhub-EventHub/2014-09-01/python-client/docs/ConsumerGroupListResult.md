# ConsumerGroupListResult

The result to the List Consumer Group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of Consumer Group | [optional] 
**value** | [**List[ConsumerGroupResource]**](ConsumerGroupResource.md) | Result of the List Consumer Group operation. | [optional] 

## Example

```python
from openapi_client.models.consumer_group_list_result import ConsumerGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerGroupListResult from a JSON string
consumer_group_list_result_instance = ConsumerGroupListResult.from_json(json)
# print the JSON string representation of the object
print(ConsumerGroupListResult.to_json())

# convert the object into a dict
consumer_group_list_result_dict = consumer_group_list_result_instance.to_dict()
# create an instance of ConsumerGroupListResult from a dict
consumer_group_list_result_from_dict = ConsumerGroupListResult.from_dict(consumer_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


