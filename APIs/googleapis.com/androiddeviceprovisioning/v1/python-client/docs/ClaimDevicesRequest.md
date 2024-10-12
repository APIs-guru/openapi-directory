# ClaimDevicesRequest

Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claims** | [**List[PartnerClaim]**](PartnerClaim.md) | Required. A list of device claims. | [optional] 

## Example

```python
from openapi_client.models.claim_devices_request import ClaimDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimDevicesRequest from a JSON string
claim_devices_request_instance = ClaimDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(ClaimDevicesRequest.to_json())

# convert the object into a dict
claim_devices_request_dict = claim_devices_request_instance.to_dict()
# create an instance of ClaimDevicesRequest from a dict
claim_devices_request_from_dict = ClaimDevicesRequest.from_dict(claim_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


