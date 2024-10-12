# ExtractionRules

Extraction Rules to identity the backends from customer provided configuration in Connection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extraction_rule** | [**List[ExtractionRule]**](ExtractionRule.md) | Collection of Extraction Rule. | [optional] 

## Example

```python
from openapi_client.models.extraction_rules import ExtractionRules

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractionRules from a JSON string
extraction_rules_instance = ExtractionRules.from_json(json)
# print the JSON string representation of the object
print(ExtractionRules.to_json())

# convert the object into a dict
extraction_rules_dict = extraction_rules_instance.to_dict()
# create an instance of ExtractionRules from a dict
extraction_rules_from_dict = ExtractionRules.from_dict(extraction_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


