# Domains


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only). | [optional] 
**domain_aliases** | [**List[DomainAlias]**](DomainAlias.md) | A list of domain alias objects. (Read-only) | [optional] 
**domain_name** | **str** | The domain name of the customer. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**is_primary** | **bool** | Indicates if the domain is a primary domain (Read-only). | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#domain']
**verified** | **bool** | Indicates the verification state of a domain. (Read-only). | [optional] 

## Example

```python
from openapi_client.models.domains import Domains

# TODO update the JSON string below
json = "{}"
# create an instance of Domains from a JSON string
domains_instance = Domains.from_json(json)
# print the JSON string representation of the object
print(Domains.to_json())

# convert the object into a dict
domains_dict = domains_instance.to_dict()
# create an instance of Domains from a dict
domains_from_dict = Domains.from_dict(domains_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


