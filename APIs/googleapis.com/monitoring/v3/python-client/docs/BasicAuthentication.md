# BasicAuthentication

The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password to use when authenticating with the HTTP server. | [optional] 
**username** | **str** | The username to use when authenticating with the HTTP server. | [optional] 

## Example

```python
from openapi_client.models.basic_authentication import BasicAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of BasicAuthentication from a JSON string
basic_authentication_instance = BasicAuthentication.from_json(json)
# print the JSON string representation of the object
print(BasicAuthentication.to_json())

# convert the object into a dict
basic_authentication_dict = basic_authentication_instance.to_dict()
# create an instance of BasicAuthentication from a dict
basic_authentication_from_dict = BasicAuthentication.from_dict(basic_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


