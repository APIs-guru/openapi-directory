# UpstreamCredentials

The credentials to access the remote repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username_password_credentials** | [**UsernamePasswordCredentials**](UsernamePasswordCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.upstream_credentials import UpstreamCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of UpstreamCredentials from a JSON string
upstream_credentials_instance = UpstreamCredentials.from_json(json)
# print the JSON string representation of the object
print(UpstreamCredentials.to_json())

# convert the object into a dict
upstream_credentials_dict = upstream_credentials_instance.to_dict()
# create an instance of UpstreamCredentials from a dict
upstream_credentials_from_dict = UpstreamCredentials.from_dict(upstream_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


