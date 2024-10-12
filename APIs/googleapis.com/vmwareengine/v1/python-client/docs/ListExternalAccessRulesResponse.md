# ListExternalAccessRulesResponse

Response message for VmwareEngine.ListExternalAccessRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_access_rules** | [**List[ExternalAccessRule]**](ExternalAccessRule.md) | A list of external access firewall rules. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached when making an aggregated query using wildcards. | [optional] 

## Example

```python
from openapi_client.models.list_external_access_rules_response import ListExternalAccessRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListExternalAccessRulesResponse from a JSON string
list_external_access_rules_response_instance = ListExternalAccessRulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListExternalAccessRulesResponse.to_json())

# convert the object into a dict
list_external_access_rules_response_dict = list_external_access_rules_response_instance.to_dict()
# create an instance of ListExternalAccessRulesResponse from a dict
list_external_access_rules_response_from_dict = ListExternalAccessRulesResponse.from_dict(list_external_access_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


