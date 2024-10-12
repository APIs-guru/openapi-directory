# PolicyGetEntityTagDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.policy_get_entity_tag_default_response_error_details_inner import PolicyGetEntityTagDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyGetEntityTagDefaultResponseErrorDetailsInner from a JSON string
policy_get_entity_tag_default_response_error_details_inner_instance = PolicyGetEntityTagDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(PolicyGetEntityTagDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
policy_get_entity_tag_default_response_error_details_inner_dict = policy_get_entity_tag_default_response_error_details_inner_instance.to_dict()
# create an instance of PolicyGetEntityTagDefaultResponseErrorDetailsInner from a dict
policy_get_entity_tag_default_response_error_details_inner_from_dict = PolicyGetEntityTagDefaultResponseErrorDetailsInner.from_dict(policy_get_entity_tag_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


