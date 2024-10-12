# DeactivateUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.deactivate_user_response import DeactivateUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivateUserResponse from a JSON string
deactivate_user_response_instance = DeactivateUserResponse.from_json(json)
# print the JSON string representation of the object
print(DeactivateUserResponse.to_json())

# convert the object into a dict
deactivate_user_response_dict = deactivate_user_response_instance.to_dict()
# create an instance of DeactivateUserResponse from a dict
deactivate_user_response_from_dict = DeactivateUserResponse.from_dict(deactivate_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


