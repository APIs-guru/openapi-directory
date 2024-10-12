# ListMappingRulesResponse

Response message for 'ListMappingRulesRequest' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapping_rules** | [**List[MappingRule]**](MappingRule.md) | The list of conversion workspace mapping rules. | [optional] 
**next_page_token** | **str** | A token which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_mapping_rules_response import ListMappingRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMappingRulesResponse from a JSON string
list_mapping_rules_response_instance = ListMappingRulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListMappingRulesResponse.to_json())

# convert the object into a dict
list_mapping_rules_response_dict = list_mapping_rules_response_instance.to_dict()
# create an instance of ListMappingRulesResponse from a dict
list_mapping_rules_response_from_dict = ListMappingRulesResponse.from_dict(list_mapping_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


