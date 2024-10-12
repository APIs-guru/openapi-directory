# DomainConfig

Configuration options for a custom domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Immutable. Domain used by Workstations for HTTP ingress. | [optional] 

## Example

```python
from openapi_client.models.domain_config import DomainConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DomainConfig from a JSON string
domain_config_instance = DomainConfig.from_json(json)
# print the JSON string representation of the object
print(DomainConfig.to_json())

# convert the object into a dict
domain_config_dict = domain_config_instance.to_dict()
# create an instance of DomainConfig from a dict
domain_config_from_dict = DomainConfig.from_dict(domain_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


