# NewUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**entity_token** | **str** |  | [optional] 
**firstname** | **str** |  | [optional] 
**is_active** | **bool** |  | [optional] [readonly] 
**lastname** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.new_user_request import NewUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NewUserRequest from a JSON string
new_user_request_instance = NewUserRequest.from_json(json)
# print the JSON string representation of the object
print(NewUserRequest.to_json())

# convert the object into a dict
new_user_request_dict = new_user_request_instance.to_dict()
# create an instance of NewUserRequest from a dict
new_user_request_from_dict = NewUserRequest.from_dict(new_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


