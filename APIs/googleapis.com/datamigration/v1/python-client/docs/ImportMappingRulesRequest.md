# ImportMappingRulesRequest

Request message for 'ImportMappingRules' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_commit** | **bool** | Required. Should the conversion workspace be committed automatically after the import operation. | [optional] 
**rules_files** | [**List[RulesFile]**](RulesFile.md) | Required. One or more rules files. | [optional] 
**rules_format** | **str** | Required. The format of the rules content file. | [optional] 

## Example

```python
from openapi_client.models.import_mapping_rules_request import ImportMappingRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportMappingRulesRequest from a JSON string
import_mapping_rules_request_instance = ImportMappingRulesRequest.from_json(json)
# print the JSON string representation of the object
print(ImportMappingRulesRequest.to_json())

# convert the object into a dict
import_mapping_rules_request_dict = import_mapping_rules_request_instance.to_dict()
# create an instance of ImportMappingRulesRequest from a dict
import_mapping_rules_request_from_dict = ImportMappingRulesRequest.from_dict(import_mapping_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


