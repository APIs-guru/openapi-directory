# ListRulesResponse

Mesesage of response of list rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**rules** | [**List[Rule]**](Rule.md) | all rules in response | [optional] 

## Example

```python
from openapi_client.models.list_rules_response import ListRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRulesResponse from a JSON string
list_rules_response_instance = ListRulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListRulesResponse.to_json())

# convert the object into a dict
list_rules_response_dict = list_rules_response_instance.to_dict()
# create an instance of ListRulesResponse from a dict
list_rules_response_from_dict = ListRulesResponse.from_dict(list_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


