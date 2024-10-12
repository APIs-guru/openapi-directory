# DomainSPFResult



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spf_host** | **str** |  | [optional] 
**spf_text_value** | **str** |  | [optional] 
**spf_verified** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.domain_spf_result import DomainSPFResult

# TODO update the JSON string below
json = "{}"
# create an instance of DomainSPFResult from a JSON string
domain_spf_result_instance = DomainSPFResult.from_json(json)
# print the JSON string representation of the object
print(DomainSPFResult.to_json())

# convert the object into a dict
domain_spf_result_dict = domain_spf_result_instance.to_dict()
# create an instance of DomainSPFResult from a dict
domain_spf_result_from_dict = DomainSPFResult.from_dict(domain_spf_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


