# FilterAction

A set of actions to perform on a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_label_ids** | **List[str]** | List of labels to add to the message. | [optional] 
**forward** | **str** | Email address that the message should be forwarded to. | [optional] 
**remove_label_ids** | **List[str]** | List of labels to remove from the message. | [optional] 

## Example

```python
from openapi_client.models.filter_action import FilterAction

# TODO update the JSON string below
json = "{}"
# create an instance of FilterAction from a JSON string
filter_action_instance = FilterAction.from_json(json)
# print the JSON string representation of the object
print(FilterAction.to_json())

# convert the object into a dict
filter_action_dict = filter_action_instance.to_dict()
# create an instance of FilterAction from a dict
filter_action_from_dict = FilterAction.from_dict(filter_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


