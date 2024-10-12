# ActionToPostItem

Container class for an action item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**obis_code** | **str** | The ObisCode (ID) of the Action | [optional] 
**value** | **float** | The Value to Post | [optional] 

## Example

```python
from openapi_client.models.action_to_post_item import ActionToPostItem

# TODO update the JSON string below
json = "{}"
# create an instance of ActionToPostItem from a JSON string
action_to_post_item_instance = ActionToPostItem.from_json(json)
# print the JSON string representation of the object
print(ActionToPostItem.to_json())

# convert the object into a dict
action_to_post_item_dict = action_to_post_item_instance.to_dict()
# create an instance of ActionToPostItem from a dict
action_to_post_item_from_dict = ActionToPostItem.from_dict(action_to_post_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


