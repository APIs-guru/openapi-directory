# OAuth2Error

Error Response defined as in Section 5.2 of OAuth 2.0 [RFC6749]. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**error_description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.o_auth2_error import OAuth2Error

# TODO update the JSON string below
json = "{}"
# create an instance of OAuth2Error from a JSON string
o_auth2_error_instance = OAuth2Error.from_json(json)
# print the JSON string representation of the object
print(OAuth2Error.to_json())

# convert the object into a dict
o_auth2_error_dict = o_auth2_error_instance.to_dict()
# create an instance of OAuth2Error from a dict
o_auth2_error_from_dict = OAuth2Error.from_dict(o_auth2_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


