# StateError

Describes an error related to the current state of the workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Provides specifics about the error. | [optional] 
**type** | **str** | The type of this state error. | [optional] 

## Example

```python
from openapi_client.models.state_error import StateError

# TODO update the JSON string below
json = "{}"
# create an instance of StateError from a JSON string
state_error_instance = StateError.from_json(json)
# print the JSON string representation of the object
print(StateError.to_json())

# convert the object into a dict
state_error_dict = state_error_instance.to_dict()
# create an instance of StateError from a dict
state_error_from_dict = StateError.from_dict(state_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


