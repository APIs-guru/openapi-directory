# ListRulesetsResponse

The response for FirebaseRulesService.ListRulesets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The pagination token to retrieve the next page of results. If the value is empty, no further results remain. | [optional] 
**rulesets** | [**List[Ruleset]**](Ruleset.md) | List of &#x60;Ruleset&#x60; instances. | [optional] 

## Example

```python
from openapi_client.models.list_rulesets_response import ListRulesetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRulesetsResponse from a JSON string
list_rulesets_response_instance = ListRulesetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRulesetsResponse.to_json())

# convert the object into a dict
list_rulesets_response_dict = list_rulesets_response_instance.to_dict()
# create an instance of ListRulesetsResponse from a dict
list_rulesets_response_from_dict = ListRulesetsResponse.from_dict(list_rulesets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


