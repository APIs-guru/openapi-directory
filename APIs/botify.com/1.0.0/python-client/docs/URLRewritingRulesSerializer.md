# URLRewritingRulesSerializer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[RewritingRuleSerializer]**](RewritingRuleSerializer.md) |  | 
**urls** | **List[str]** |  | 

## Example

```python
from openapi_client.models.url_rewriting_rules_serializer import URLRewritingRulesSerializer

# TODO update the JSON string below
json = "{}"
# create an instance of URLRewritingRulesSerializer from a JSON string
url_rewriting_rules_serializer_instance = URLRewritingRulesSerializer.from_json(json)
# print the JSON string representation of the object
print(URLRewritingRulesSerializer.to_json())

# convert the object into a dict
url_rewriting_rules_serializer_dict = url_rewriting_rules_serializer_instance.to_dict()
# create an instance of URLRewritingRulesSerializer from a dict
url_rewriting_rules_serializer_from_dict = URLRewritingRulesSerializer.from_dict(url_rewriting_rules_serializer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


