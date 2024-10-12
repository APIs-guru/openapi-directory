# UserNameUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The new, unique name that is used to identify. | [optional] 

## Example

```python
from openapi_client.models.user_name_update_request import UserNameUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserNameUpdateRequest from a JSON string
user_name_update_request_instance = UserNameUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(UserNameUpdateRequest.to_json())

# convert the object into a dict
user_name_update_request_dict = user_name_update_request_instance.to_dict()
# create an instance of UserNameUpdateRequest from a dict
user_name_update_request_from_dict = UserNameUpdateRequest.from_dict(user_name_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


