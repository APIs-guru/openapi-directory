# DomainService

Domain service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DomainServiceProperties**](DomainServiceProperties.md) |  | [optional] 
**etag** | **str** | Resource etag | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.domain_service import DomainService

# TODO update the JSON string below
json = "{}"
# create an instance of DomainService from a JSON string
domain_service_instance = DomainService.from_json(json)
# print the JSON string representation of the object
print(DomainService.to_json())

# convert the object into a dict
domain_service_dict = domain_service_instance.to_dict()
# create an instance of DomainService from a dict
domain_service_from_dict = DomainService.from_dict(domain_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


