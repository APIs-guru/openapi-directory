# ExportPolicy

Set of export policy rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[ExportPolicyRule]**](ExportPolicyRule.md) | Export policy rule | [optional] 

## Example

```python
from openapi_client.models.export_policy import ExportPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ExportPolicy from a JSON string
export_policy_instance = ExportPolicy.from_json(json)
# print the JSON string representation of the object
print(ExportPolicy.to_json())

# convert the object into a dict
export_policy_dict = export_policy_instance.to_dict()
# create an instance of ExportPolicy from a dict
export_policy_from_dict = ExportPolicy.from_dict(export_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


