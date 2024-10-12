# NetworkUnblockResponseOk

Success

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | The unique network ID | [optional] 
**unblocked_until** | **str** | Gives the DateTime when the unblock will expire. | [optional] 

## Example

```python
from openapi_client.models.network_unblock_response_ok import NetworkUnblockResponseOk

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUnblockResponseOk from a JSON string
network_unblock_response_ok_instance = NetworkUnblockResponseOk.from_json(json)
# print the JSON string representation of the object
print(NetworkUnblockResponseOk.to_json())

# convert the object into a dict
network_unblock_response_ok_dict = network_unblock_response_ok_instance.to_dict()
# create an instance of NetworkUnblockResponseOk from a dict
network_unblock_response_ok_from_dict = NetworkUnblockResponseOk.from_dict(network_unblock_response_ok_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


