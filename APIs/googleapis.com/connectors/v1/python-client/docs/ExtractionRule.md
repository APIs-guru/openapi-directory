# ExtractionRule

Extraction Rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extraction_regex** | **str** | Regex used to extract backend details from source. If empty, whole source value will be used. | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.extraction_rule import ExtractionRule

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractionRule from a JSON string
extraction_rule_instance = ExtractionRule.from_json(json)
# print the JSON string representation of the object
print(ExtractionRule.to_json())

# convert the object into a dict
extraction_rule_dict = extraction_rule_instance.to_dict()
# create an instance of ExtractionRule from a dict
extraction_rule_from_dict = ExtractionRule.from_dict(extraction_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


