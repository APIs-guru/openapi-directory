# AuthenticationError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.authentication_error import AuthenticationError

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationError from a JSON string
authentication_error_instance = AuthenticationError.from_json(json)
# print the JSON string representation of the object
print(AuthenticationError.to_json())

# convert the object into a dict
authentication_error_dict = authentication_error_instance.to_dict()
# create an instance of AuthenticationError from a dict
authentication_error_from_dict = AuthenticationError.from_dict(authentication_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


