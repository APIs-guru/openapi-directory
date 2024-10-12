# InteractionListResult

The response of list interaction operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[InteractionResourceFormat]**](InteractionResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.interaction_list_result import InteractionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of InteractionListResult from a JSON string
interaction_list_result_instance = InteractionListResult.from_json(json)
# print the JSON string representation of the object
print(InteractionListResult.to_json())

# convert the object into a dict
interaction_list_result_dict = interaction_list_result_instance.to_dict()
# create an instance of InteractionListResult from a dict
interaction_list_result_from_dict = InteractionListResult.from_dict(interaction_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


