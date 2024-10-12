# RuleResults


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** | Name of rule results | [optional] 
**type** | [**Type**](Type.md) |  | [optional] 

## Example

```python
from openapi_client.models.rule_results import RuleResults

# TODO update the JSON string below
json = "{}"
# create an instance of RuleResults from a JSON string
rule_results_instance = RuleResults.from_json(json)
# print the JSON string representation of the object
print(RuleResults.to_json())

# convert the object into a dict
rule_results_dict = rule_results_instance.to_dict()
# create an instance of RuleResults from a dict
rule_results_from_dict = RuleResults.from_dict(rule_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


