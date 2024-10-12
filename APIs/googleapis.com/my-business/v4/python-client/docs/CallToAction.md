# CallToAction

An action that is performed when the user clicks through the post

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | The type of action that will be performed. | [optional] 
**url** | **str** | The URL the user will be directed to upon clicking. This field should be left unset for Call CTA. | [optional] 

## Example

```python
from openapi_client.models.call_to_action import CallToAction

# TODO update the JSON string below
json = "{}"
# create an instance of CallToAction from a JSON string
call_to_action_instance = CallToAction.from_json(json)
# print the JSON string representation of the object
print(CallToAction.to_json())

# convert the object into a dict
call_to_action_dict = call_to_action_instance.to_dict()
# create an instance of CallToAction from a dict
call_to_action_from_dict = CallToAction.from_dict(call_to_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


