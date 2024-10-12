# DomainServiceListResult

The response from the List Domain Services operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token for the next page of results. | [optional] [readonly] 
**value** | [**List[DomainService]**](DomainService.md) | the list of domain services. | [optional] 

## Example

```python
from openapi_client.models.domain_service_list_result import DomainServiceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DomainServiceListResult from a JSON string
domain_service_list_result_instance = DomainServiceListResult.from_json(json)
# print the JSON string representation of the object
print(DomainServiceListResult.to_json())

# convert the object into a dict
domain_service_list_result_dict = domain_service_list_result_instance.to_dict()
# create an instance of DomainServiceListResult from a dict
domain_service_list_result_from_dict = DomainServiceListResult.from_dict(domain_service_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


