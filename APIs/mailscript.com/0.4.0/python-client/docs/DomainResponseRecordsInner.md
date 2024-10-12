# DomainResponseRecordsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.domain_response_records_inner import DomainResponseRecordsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DomainResponseRecordsInner from a JSON string
domain_response_records_inner_instance = DomainResponseRecordsInner.from_json(json)
# print the JSON string representation of the object
print(DomainResponseRecordsInner.to_json())

# convert the object into a dict
domain_response_records_inner_dict = domain_response_records_inner_instance.to_dict()
# create an instance of DomainResponseRecordsInner from a dict
domain_response_records_inner_from_dict = DomainResponseRecordsInner.from_dict(domain_response_records_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


