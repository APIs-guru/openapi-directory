# RulesFile

Details of a single rules file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules_content** | **str** | Required. The text content of the rules that needs to be converted. | [optional] 
**rules_source_filename** | **str** | Required. The filename of the rules that needs to be converted. The filename is used mainly so that future logs of the import rules job contain it, and can therefore be searched by it. | [optional] 

## Example

```python
from openapi_client.models.rules_file import RulesFile

# TODO update the JSON string below
json = "{}"
# create an instance of RulesFile from a JSON string
rules_file_instance = RulesFile.from_json(json)
# print the JSON string representation of the object
print(RulesFile.to_json())

# convert the object into a dict
rules_file_dict = rules_file_instance.to_dict()
# create an instance of RulesFile from a dict
rules_file_from_dict = RulesFile.from_dict(rules_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


