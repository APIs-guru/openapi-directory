# YaraRuleSignature

A signature corresponding to a YARA rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**yara_rule** | **str** | The name of the YARA rule. | [optional] 

## Example

```python
from openapi_client.models.yara_rule_signature import YaraRuleSignature

# TODO update the JSON string below
json = "{}"
# create an instance of YaraRuleSignature from a JSON string
yara_rule_signature_instance = YaraRuleSignature.from_json(json)
# print the JSON string representation of the object
print(YaraRuleSignature.to_json())

# convert the object into a dict
yara_rule_signature_dict = yara_rule_signature_instance.to_dict()
# create an instance of YaraRuleSignature from a dict
yara_rule_signature_from_dict = YaraRuleSignature.from_dict(yara_rule_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


