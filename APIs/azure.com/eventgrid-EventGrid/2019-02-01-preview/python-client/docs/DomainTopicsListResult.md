# DomainTopicsListResult

Result of the List Domain Topics operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A link for the next page of domain topics | [optional] 
**value** | [**List[DomainTopic]**](DomainTopic.md) | A collection of Domain Topics | [optional] 

## Example

```python
from openapi_client.models.domain_topics_list_result import DomainTopicsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DomainTopicsListResult from a JSON string
domain_topics_list_result_instance = DomainTopicsListResult.from_json(json)
# print the JSON string representation of the object
print(DomainTopicsListResult.to_json())

# convert the object into a dict
domain_topics_list_result_dict = domain_topics_list_result_instance.to_dict()
# create an instance of DomainTopicsListResult from a dict
domain_topics_list_result_from_dict = DomainTopicsListResult.from_dict(domain_topics_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


