# RulesRequestSummaryOneOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **int** | Number of user-specified stream filtering rules that were deleted. | 
**not_deleted** | **int** | Number of user-specified stream filtering rules that were not deleted. | 

## Example

```python
from openapi_client.models.rules_request_summary_one_of1 import RulesRequestSummaryOneOf1

# TODO update the JSON string below
json = "{}"
# create an instance of RulesRequestSummaryOneOf1 from a JSON string
rules_request_summary_one_of1_instance = RulesRequestSummaryOneOf1.from_json(json)
# print the JSON string representation of the object
print(RulesRequestSummaryOneOf1.to_json())

# convert the object into a dict
rules_request_summary_one_of1_dict = rules_request_summary_one_of1_instance.to_dict()
# create an instance of RulesRequestSummaryOneOf1 from a dict
rules_request_summary_one_of1_from_dict = RulesRequestSummaryOneOf1.from_dict(rules_request_summary_one_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


