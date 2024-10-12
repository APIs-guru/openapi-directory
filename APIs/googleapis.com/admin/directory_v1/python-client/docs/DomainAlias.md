# DomainAlias


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | The creation time of the domain alias. (Read-only). | [optional] 
**domain_alias_name** | **str** | The domain alias name. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#domainAlias']
**parent_domain_name** | **str** | The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer. | [optional] 
**verified** | **bool** | Indicates the verification state of a domain alias. (Read-only) | [optional] 

## Example

```python
from openapi_client.models.domain_alias import DomainAlias

# TODO update the JSON string below
json = "{}"
# create an instance of DomainAlias from a JSON string
domain_alias_instance = DomainAlias.from_json(json)
# print the JSON string representation of the object
print(DomainAlias.to_json())

# convert the object into a dict
domain_alias_dict = domain_alias_instance.to_dict()
# create an instance of DomainAlias from a dict
domain_alias_from_dict = DomainAlias.from_dict(domain_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


