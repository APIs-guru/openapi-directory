# AuthorizedDomain

A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Search Console (https://search.google.com/search-console/welcome).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Fully qualified domain name of the domain authorized for use. Example: example.com. | [optional] 
**name** | **str** | Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly | [optional] 

## Example

```python
from openapi_client.models.authorized_domain import AuthorizedDomain

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizedDomain from a JSON string
authorized_domain_instance = AuthorizedDomain.from_json(json)
# print the JSON string representation of the object
print(AuthorizedDomain.to_json())

# convert the object into a dict
authorized_domain_dict = authorized_domain_instance.to_dict()
# create an instance of AuthorizedDomain from a dict
authorized_domain_from_dict = AuthorizedDomain.from_dict(authorized_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


