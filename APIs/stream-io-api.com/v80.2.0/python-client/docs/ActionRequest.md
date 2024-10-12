# ActionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**style** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.action_request import ActionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ActionRequest from a JSON string
action_request_instance = ActionRequest.from_json(json)
# print the JSON string representation of the object
print(ActionRequest.to_json())

# convert the object into a dict
action_request_dict = action_request_instance.to_dict()
# create an instance of ActionRequest from a dict
action_request_from_dict = ActionRequest.from_dict(action_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


