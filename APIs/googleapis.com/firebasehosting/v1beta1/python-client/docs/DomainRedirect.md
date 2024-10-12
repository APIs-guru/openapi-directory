# DomainRedirect

Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | Required. The domain name to redirect to. | [optional] 
**type** | **str** | Required. The redirect status code. | [optional] 

## Example

```python
from openapi_client.models.domain_redirect import DomainRedirect

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRedirect from a JSON string
domain_redirect_instance = DomainRedirect.from_json(json)
# print the JSON string representation of the object
print(DomainRedirect.to_json())

# convert the object into a dict
domain_redirect_dict = domain_redirect_instance.to_dict()
# create an instance of DomainRedirect from a dict
domain_redirect_from_dict = DomainRedirect.from_dict(domain_redirect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


