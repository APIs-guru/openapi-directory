# ListDomainMappingsResponse

Response message for DomainMappings.ListDomainMappings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_mappings** | [**List[DomainMapping]**](DomainMapping.md) | The domain mappings for the application. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_domain_mappings_response import ListDomainMappingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDomainMappingsResponse from a JSON string
list_domain_mappings_response_instance = ListDomainMappingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDomainMappingsResponse.to_json())

# convert the object into a dict
list_domain_mappings_response_dict = list_domain_mappings_response_instance.to_dict()
# create an instance of ListDomainMappingsResponse from a dict
list_domain_mappings_response_from_dict = ListDomainMappingsResponse.from_dict(list_domain_mappings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


