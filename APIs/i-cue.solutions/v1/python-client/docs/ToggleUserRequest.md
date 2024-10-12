# ToggleUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**is_active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.toggle_user_request import ToggleUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ToggleUserRequest from a JSON string
toggle_user_request_instance = ToggleUserRequest.from_json(json)
# print the JSON string representation of the object
print(ToggleUserRequest.to_json())

# convert the object into a dict
toggle_user_request_dict = toggle_user_request_instance.to_dict()
# create an instance of ToggleUserRequest from a dict
toggle_user_request_from_dict = ToggleUserRequest.from_dict(toggle_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


