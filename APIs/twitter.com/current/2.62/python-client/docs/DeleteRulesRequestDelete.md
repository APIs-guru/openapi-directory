# DeleteRulesRequestDelete

IDs and values of all deleted user-specified stream filtering rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | IDs of all deleted user-specified stream filtering rules. | [optional] 
**values** | **List[str]** | Values of all deleted user-specified stream filtering rules. | [optional] 

## Example

```python
from openapi_client.models.delete_rules_request_delete import DeleteRulesRequestDelete

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteRulesRequestDelete from a JSON string
delete_rules_request_delete_instance = DeleteRulesRequestDelete.from_json(json)
# print the JSON string representation of the object
print(DeleteRulesRequestDelete.to_json())

# convert the object into a dict
delete_rules_request_delete_dict = delete_rules_request_delete_instance.to_dict()
# create an instance of DeleteRulesRequestDelete from a dict
delete_rules_request_delete_from_dict = DeleteRulesRequestDelete.from_dict(delete_rules_request_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


