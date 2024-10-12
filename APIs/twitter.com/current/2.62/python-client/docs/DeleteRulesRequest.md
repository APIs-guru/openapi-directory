# DeleteRulesRequest

A response from deleting user-specified stream filtering rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**DeleteRulesRequestDelete**](DeleteRulesRequestDelete.md) |  | 

## Example

```python
from openapi_client.models.delete_rules_request import DeleteRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteRulesRequest from a JSON string
delete_rules_request_instance = DeleteRulesRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteRulesRequest.to_json())

# convert the object into a dict
delete_rules_request_dict = delete_rules_request_instance.to_dict()
# create an instance of DeleteRulesRequest from a dict
delete_rules_request_from_dict = DeleteRulesRequest.from_dict(delete_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


