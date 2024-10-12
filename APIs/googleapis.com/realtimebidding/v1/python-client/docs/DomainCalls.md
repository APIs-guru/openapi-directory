# DomainCalls

The number of HTTP calls made to the given domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | The domain name. | [optional] 
**http_call_count** | **int** | Number of HTTP calls made to the domain. | [optional] 

## Example

```python
from openapi_client.models.domain_calls import DomainCalls

# TODO update the JSON string below
json = "{}"
# create an instance of DomainCalls from a JSON string
domain_calls_instance = DomainCalls.from_json(json)
# print the JSON string representation of the object
print(DomainCalls.to_json())

# convert the object into a dict
domain_calls_dict = domain_calls_instance.to_dict()
# create an instance of DomainCalls from a dict
domain_calls_from_dict = DomainCalls.from_dict(domain_calls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


