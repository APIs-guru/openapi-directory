# AccessCredentials

AccessCredentials includes the OAuth access token, and the other fields returned along with it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | OAuth access token. | [optional] 
**expires_in** | **str** | Duration till the access token expires. | [optional] 
**refresh_token** | **str** | OAuth refresh token. | [optional] 

## Example

```python
from openapi_client.models.access_credentials import AccessCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of AccessCredentials from a JSON string
access_credentials_instance = AccessCredentials.from_json(json)
# print the JSON string representation of the object
print(AccessCredentials.to_json())

# convert the object into a dict
access_credentials_dict = access_credentials_instance.to_dict()
# create an instance of AccessCredentials from a dict
access_credentials_from_dict = AccessCredentials.from_dict(access_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


