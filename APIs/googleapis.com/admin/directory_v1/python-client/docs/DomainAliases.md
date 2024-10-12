# DomainAliases


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_aliases** | [**List[DomainAlias]**](DomainAlias.md) | A list of domain alias objects. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#domainAliases']

## Example

```python
from openapi_client.models.domain_aliases import DomainAliases

# TODO update the JSON string below
json = "{}"
# create an instance of DomainAliases from a JSON string
domain_aliases_instance = DomainAliases.from_json(json)
# print the JSON string representation of the object
print(DomainAliases.to_json())

# convert the object into a dict
domain_aliases_dict = domain_aliases_instance.to_dict()
# create an instance of DomainAliases from a dict
domain_aliases_from_dict = DomainAliases.from_dict(domain_aliases_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


