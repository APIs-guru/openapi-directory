# RuleErrorInfo

The error details in legacy rule processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_mapping** | [**AttributeMapping**](AttributeMapping.md) |  | [optional] 
**connector_id** | **str** | The connector Id. | [optional] 
**connector_name** | **str** | The connector name. | [optional] 
**cs_object_id** | **str** | The object Id. | [optional] 
**dn** | **str** | The distinguished name. | [optional] 

## Example

```python
from openapi_client.models.rule_error_info import RuleErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RuleErrorInfo from a JSON string
rule_error_info_instance = RuleErrorInfo.from_json(json)
# print the JSON string representation of the object
print(RuleErrorInfo.to_json())

# convert the object into a dict
rule_error_info_dict = rule_error_info_instance.to_dict()
# create an instance of RuleErrorInfo from a dict
rule_error_info_from_dict = RuleErrorInfo.from_dict(rule_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


