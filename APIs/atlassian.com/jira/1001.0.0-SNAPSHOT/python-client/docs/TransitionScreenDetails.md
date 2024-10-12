# TransitionScreenDetails

The details of a transition screen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the screen. | 
**name** | **str** | The name of the screen. | [optional] 

## Example

```python
from openapi_client.models.transition_screen_details import TransitionScreenDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TransitionScreenDetails from a JSON string
transition_screen_details_instance = TransitionScreenDetails.from_json(json)
# print the JSON string representation of the object
print(TransitionScreenDetails.to_json())

# convert the object into a dict
transition_screen_details_dict = transition_screen_details_instance.to_dict()
# create an instance of TransitionScreenDetails from a dict
transition_screen_details_from_dict = TransitionScreenDetails.from_dict(transition_screen_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


