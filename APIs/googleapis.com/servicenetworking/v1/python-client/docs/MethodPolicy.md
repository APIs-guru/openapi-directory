# MethodPolicy

Defines policies applying to an RPC method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_policies** | [**List[FieldPolicy]**](FieldPolicy.md) | Policies that are applicable to the request message. | [optional] 
**selector** | **str** | Selects a method to which these policies should be enforced, for example, \&quot;google.pubsub.v1.Subscriber.CreateSubscription\&quot;. Refer to selector for syntax details. NOTE: This field must not be set in the proto annotation. It will be automatically filled by the service config compiler . | [optional] 

## Example

```python
from openapi_client.models.method_policy import MethodPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of MethodPolicy from a JSON string
method_policy_instance = MethodPolicy.from_json(json)
# print the JSON string representation of the object
print(MethodPolicy.to_json())

# convert the object into a dict
method_policy_dict = method_policy_instance.to_dict()
# create an instance of MethodPolicy from a dict
method_policy_from_dict = MethodPolicy.from_dict(method_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


