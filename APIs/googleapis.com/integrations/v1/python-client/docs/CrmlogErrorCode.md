# CrmlogErrorCode

Registered ids for errors, as \"oneof\" enums. Each task or logical grouping of tasks may share the same enum.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_error_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.crmlog_error_code import CrmlogErrorCode

# TODO update the JSON string below
json = "{}"
# create an instance of CrmlogErrorCode from a JSON string
crmlog_error_code_instance = CrmlogErrorCode.from_json(json)
# print the JSON string representation of the object
print(CrmlogErrorCode.to_json())

# convert the object into a dict
crmlog_error_code_dict = crmlog_error_code_instance.to_dict()
# create an instance of CrmlogErrorCode from a dict
crmlog_error_code_from_dict = CrmlogErrorCode.from_dict(crmlog_error_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


