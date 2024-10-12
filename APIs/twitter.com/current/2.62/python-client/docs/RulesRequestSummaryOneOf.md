# RulesRequestSummaryOneOf

A summary of the results of the addition of user-specified stream filtering rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** | Number of user-specified stream filtering rules that were created. | 
**invalid** | **int** | Number of invalid user-specified stream filtering rules. | 
**not_created** | **int** | Number of user-specified stream filtering rules that were not created. | 
**valid** | **int** | Number of valid user-specified stream filtering rules. | 

## Example

```python
from openapi_client.models.rules_request_summary_one_of import RulesRequestSummaryOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of RulesRequestSummaryOneOf from a JSON string
rules_request_summary_one_of_instance = RulesRequestSummaryOneOf.from_json(json)
# print the JSON string representation of the object
print(RulesRequestSummaryOneOf.to_json())

# convert the object into a dict
rules_request_summary_one_of_dict = rules_request_summary_one_of_instance.to_dict()
# create an instance of RulesRequestSummaryOneOf from a dict
rules_request_summary_one_of_from_dict = RulesRequestSummaryOneOf.from_dict(rules_request_summary_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


