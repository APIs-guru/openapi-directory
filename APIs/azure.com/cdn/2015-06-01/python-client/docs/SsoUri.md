# SsoUri

SSO URI required to login to third party web portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sso_uri_value** | **str** | The URI used to login to third party web portal. | [optional] 

## Example

```python
from openapi_client.models.sso_uri import SsoUri

# TODO update the JSON string below
json = "{}"
# create an instance of SsoUri from a JSON string
sso_uri_instance = SsoUri.from_json(json)
# print the JSON string representation of the object
print(SsoUri.to_json())

# convert the object into a dict
sso_uri_dict = sso_uri_instance.to_dict()
# create an instance of SsoUri from a dict
sso_uri_from_dict = SsoUri.from_dict(sso_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


