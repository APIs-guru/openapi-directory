# ErrorAuthenticationFailed

Authentication Failed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **object** |  | [optional] 
**error_code_label** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.error_authentication_failed import ErrorAuthenticationFailed

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorAuthenticationFailed from a JSON string
error_authentication_failed_instance = ErrorAuthenticationFailed.from_json(json)
# print the JSON string representation of the object
print(ErrorAuthenticationFailed.to_json())

# convert the object into a dict
error_authentication_failed_dict = error_authentication_failed_instance.to_dict()
# create an instance of ErrorAuthenticationFailed from a dict
error_authentication_failed_from_dict = ErrorAuthenticationFailed.from_dict(error_authentication_failed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


