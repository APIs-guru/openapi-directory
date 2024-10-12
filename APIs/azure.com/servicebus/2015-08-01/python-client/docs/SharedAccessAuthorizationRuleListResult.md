# SharedAccessAuthorizationRuleListResult

The response to the List Namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of Authorization Rules. | [optional] 
**value** | [**List[SharedAccessAuthorizationRuleResource]**](SharedAccessAuthorizationRuleResource.md) | Result of the List Authorization Rules operation. | [optional] 

## Example

```python
from openapi_client.models.shared_access_authorization_rule_list_result import SharedAccessAuthorizationRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessAuthorizationRuleListResult from a JSON string
shared_access_authorization_rule_list_result_instance = SharedAccessAuthorizationRuleListResult.from_json(json)
# print the JSON string representation of the object
print(SharedAccessAuthorizationRuleListResult.to_json())

# convert the object into a dict
shared_access_authorization_rule_list_result_dict = shared_access_authorization_rule_list_result_instance.to_dict()
# create an instance of SharedAccessAuthorizationRuleListResult from a dict
shared_access_authorization_rule_list_result_from_dict = SharedAccessAuthorizationRuleListResult.from_dict(shared_access_authorization_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


