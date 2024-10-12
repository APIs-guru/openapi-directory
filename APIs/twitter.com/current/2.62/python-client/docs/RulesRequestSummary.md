# RulesRequestSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **int** | Number of user-specified stream filtering rules that were created. | 
**invalid** | **int** | Number of invalid user-specified stream filtering rules. | 
**not_created** | **int** | Number of user-specified stream filtering rules that were not created. | 
**valid** | **int** | Number of valid user-specified stream filtering rules. | 
**deleted** | **int** | Number of user-specified stream filtering rules that were deleted. | 
**not_deleted** | **int** | Number of user-specified stream filtering rules that were not deleted. | 

## Example

```python
from openapi_client.models.rules_request_summary import RulesRequestSummary

# TODO update the JSON string below
json = "{}"
# create an instance of RulesRequestSummary from a JSON string
rules_request_summary_instance = RulesRequestSummary.from_json(json)
# print the JSON string representation of the object
print(RulesRequestSummary.to_json())

# convert the object into a dict
rules_request_summary_dict = rules_request_summary_instance.to_dict()
# create an instance of RulesRequestSummary from a dict
rules_request_summary_from_dict = RulesRequestSummary.from_dict(rules_request_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


