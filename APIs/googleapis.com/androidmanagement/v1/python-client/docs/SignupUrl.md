# SignupUrl

An enterprise signup URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow. | [optional] 
**url** | **str** | A URL where an enterprise admin can register their enterprise. The page can&#39;t be rendered in an iframe. | [optional] 

## Example

```python
from openapi_client.models.signup_url import SignupUrl

# TODO update the JSON string below
json = "{}"
# create an instance of SignupUrl from a JSON string
signup_url_instance = SignupUrl.from_json(json)
# print the JSON string representation of the object
print(SignupUrl.to_json())

# convert the object into a dict
signup_url_dict = signup_url_instance.to_dict()
# create an instance of SignupUrl from a dict
signup_url_from_dict = SignupUrl.from_dict(signup_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


