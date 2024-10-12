# CreateNetworkSmBypassActivationLockAttemptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | The ids of the devices to attempt activation lock bypass. | 

## Example

```python
from openapi_client.models.create_network_sm_bypass_activation_lock_attempt_request import CreateNetworkSmBypassActivationLockAttemptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSmBypassActivationLockAttemptRequest from a JSON string
create_network_sm_bypass_activation_lock_attempt_request_instance = CreateNetworkSmBypassActivationLockAttemptRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSmBypassActivationLockAttemptRequest.to_json())

# convert the object into a dict
create_network_sm_bypass_activation_lock_attempt_request_dict = create_network_sm_bypass_activation_lock_attempt_request_instance.to_dict()
# create an instance of CreateNetworkSmBypassActivationLockAttemptRequest from a dict
create_network_sm_bypass_activation_lock_attempt_request_from_dict = CreateNetworkSmBypassActivationLockAttemptRequest.from_dict(create_network_sm_bypass_activation_lock_attempt_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


