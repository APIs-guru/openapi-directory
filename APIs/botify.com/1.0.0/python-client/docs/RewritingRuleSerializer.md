# RewritingRuleSerializer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_case** | **bool** |  | 
**regex** | **str** |  | 
**replace** | **str** |  | 

## Example

```python
from openapi_client.models.rewriting_rule_serializer import RewritingRuleSerializer

# TODO update the JSON string below
json = "{}"
# create an instance of RewritingRuleSerializer from a JSON string
rewriting_rule_serializer_instance = RewritingRuleSerializer.from_json(json)
# print the JSON string representation of the object
print(RewritingRuleSerializer.to_json())

# convert the object into a dict
rewriting_rule_serializer_dict = rewriting_rule_serializer_instance.to_dict()
# create an instance of RewritingRuleSerializer from a dict
rewriting_rule_serializer_from_dict = RewritingRuleSerializer.from_dict(rewriting_rule_serializer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


