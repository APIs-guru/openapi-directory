# ListDomainMappingsResponse

ListDomainMappingsResponse is a list of DomainMapping resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;domains.cloudrun.com/v1\&quot;. | [optional] 
**items** | [**List[DomainMapping]**](DomainMapping.md) | List of DomainMappings. | [optional] 
**kind** | **str** | The kind of this resource, in this case \&quot;DomainMappingList\&quot;. | [optional] 
**metadata** | [**ListMeta**](ListMeta.md) |  | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

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


