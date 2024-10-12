# PolicyGetEntityTagDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PolicyGetEntityTagDefaultResponseError**](PolicyGetEntityTagDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_get_entity_tag_default_response import PolicyGetEntityTagDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyGetEntityTagDefaultResponse from a JSON string
policy_get_entity_tag_default_response_instance = PolicyGetEntityTagDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PolicyGetEntityTagDefaultResponse.to_json())

# convert the object into a dict
policy_get_entity_tag_default_response_dict = policy_get_entity_tag_default_response_instance.to_dict()
# create an instance of PolicyGetEntityTagDefaultResponse from a dict
policy_get_entity_tag_default_response_from_dict = PolicyGetEntityTagDefaultResponse.from_dict(policy_get_entity_tag_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


