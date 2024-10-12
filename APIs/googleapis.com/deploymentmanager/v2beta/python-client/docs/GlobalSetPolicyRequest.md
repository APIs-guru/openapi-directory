# GlobalSetPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindings** | [**List[Binding]**](Binding.md) | Flatten Policy to create a backward compatible wire-format. Deprecated. Use &#39;policy&#39; to specify bindings. | [optional] 
**etag** | **bytearray** | Flatten Policy to create a backward compatible wire-format. Deprecated. Use &#39;policy&#39; to specify the etag. | [optional] 
**policy** | [**Policy**](Policy.md) |  | [optional] 

## Example

```python
from openapi_client.models.global_set_policy_request import GlobalSetPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalSetPolicyRequest from a JSON string
global_set_policy_request_instance = GlobalSetPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GlobalSetPolicyRequest.to_json())

# convert the object into a dict
global_set_policy_request_dict = global_set_policy_request_instance.to_dict()
# create an instance of GlobalSetPolicyRequest from a dict
global_set_policy_request_from_dict = GlobalSetPolicyRequest.from_dict(global_set_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


