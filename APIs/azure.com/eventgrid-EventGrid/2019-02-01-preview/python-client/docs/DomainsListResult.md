# DomainsListResult

Result of the List Domains operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A link for the next page of domains | [optional] 
**value** | [**List[Domain]**](Domain.md) | A collection of Domains | [optional] 

## Example

```python
from openapi_client.models.domains_list_result import DomainsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DomainsListResult from a JSON string
domains_list_result_instance = DomainsListResult.from_json(json)
# print the JSON string representation of the object
print(DomainsListResult.to_json())

# convert the object into a dict
domains_list_result_dict = domains_list_result_instance.to_dict()
# create an instance of DomainsListResult from a dict
domains_list_result_from_dict = DomainsListResult.from_dict(domains_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


