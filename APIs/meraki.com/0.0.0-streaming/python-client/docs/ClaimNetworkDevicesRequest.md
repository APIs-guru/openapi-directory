# ClaimNetworkDevicesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **str** | [DEPRECATED] The serial of a device to claim | [optional] 
**serials** | **List[str]** | A list of serials of devices to claim | [optional] 

## Example

```python
from openapi_client.models.claim_network_devices_request import ClaimNetworkDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimNetworkDevicesRequest from a JSON string
claim_network_devices_request_instance = ClaimNetworkDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(ClaimNetworkDevicesRequest.to_json())

# convert the object into a dict
claim_network_devices_request_dict = claim_network_devices_request_instance.to_dict()
# create an instance of ClaimNetworkDevicesRequest from a dict
claim_network_devices_request_from_dict = ClaimNetworkDevicesRequest.from_dict(claim_network_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


