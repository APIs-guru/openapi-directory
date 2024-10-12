# Domain

The intended behavior and status information of a domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | Required. The domain name of the association. | [optional] 
**domain_redirect** | [**DomainRedirect**](DomainRedirect.md) |  | [optional] 
**provisioning** | [**DomainProvisioning**](DomainProvisioning.md) |  | [optional] 
**site** | **str** | Required. The site name of the association. | [optional] 
**status** | **str** | Output only. Additional status of the domain association. | [optional] 
**update_time** | **str** | Output only. The time at which the domain was last updated. | [optional] 

## Example

```python
from openapi_client.models.domain import Domain

# TODO update the JSON string below
json = "{}"
# create an instance of Domain from a JSON string
domain_instance = Domain.from_json(json)
# print the JSON string representation of the object
print(Domain.to_json())

# convert the object into a dict
domain_dict = domain_instance.to_dict()
# create an instance of Domain from a dict
domain_from_dict = Domain.from_dict(domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


