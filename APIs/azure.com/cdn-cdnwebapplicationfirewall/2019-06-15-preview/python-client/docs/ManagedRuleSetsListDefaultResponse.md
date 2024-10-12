# ManagedRuleSetsListDefaultResponse

Error response indicates CDN service is not able to process the incoming request. The reason is provided in the error message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] [readonly] 
**message** | **str** | Error message indicating why the operation failed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_rule_sets_list_default_response import ManagedRuleSetsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleSetsListDefaultResponse from a JSON string
managed_rule_sets_list_default_response_instance = ManagedRuleSetsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleSetsListDefaultResponse.to_json())

# convert the object into a dict
managed_rule_sets_list_default_response_dict = managed_rule_sets_list_default_response_instance.to_dict()
# create an instance of ManagedRuleSetsListDefaultResponse from a dict
managed_rule_sets_list_default_response_from_dict = ManagedRuleSetsListDefaultResponse.from_dict(managed_rule_sets_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


