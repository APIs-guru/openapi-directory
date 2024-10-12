# PerformedMonkeyActions

A notification that Robo performed some monkey actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_actions** | **int** | The total number of monkey actions performed during the crawl. | [optional] 

## Example

```python
from openapi_client.models.performed_monkey_actions import PerformedMonkeyActions

# TODO update the JSON string below
json = "{}"
# create an instance of PerformedMonkeyActions from a JSON string
performed_monkey_actions_instance = PerformedMonkeyActions.from_json(json)
# print the JSON string representation of the object
print(PerformedMonkeyActions.to_json())

# convert the object into a dict
performed_monkey_actions_dict = performed_monkey_actions_instance.to_dict()
# create an instance of PerformedMonkeyActions from a dict
performed_monkey_actions_from_dict = PerformedMonkeyActions.from_dict(performed_monkey_actions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


