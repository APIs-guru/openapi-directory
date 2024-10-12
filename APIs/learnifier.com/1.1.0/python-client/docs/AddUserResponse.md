# AddUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | The user id | [optional] 

## Example

```python
from openapi_client.models.add_user_response import AddUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserResponse from a JSON string
add_user_response_instance = AddUserResponse.from_json(json)
# print the JSON string representation of the object
print(AddUserResponse.to_json())

# convert the object into a dict
add_user_response_dict = add_user_response_instance.to_dict()
# create an instance of AddUserResponse from a dict
add_user_response_from_dict = AddUserResponse.from_dict(add_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


