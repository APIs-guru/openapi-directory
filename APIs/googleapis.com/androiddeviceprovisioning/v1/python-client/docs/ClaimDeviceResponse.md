# ClaimDeviceResponse

Response message containing device id of the claim.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | The device ID of the claimed device. | [optional] 
**device_name** | **str** | The resource name of the device in the format &#x60;partners/[PARTNER_ID]/devices/[DEVICE_ID]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.claim_device_response import ClaimDeviceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimDeviceResponse from a JSON string
claim_device_response_instance = ClaimDeviceResponse.from_json(json)
# print the JSON string representation of the object
print(ClaimDeviceResponse.to_json())

# convert the object into a dict
claim_device_response_dict = claim_device_response_instance.to_dict()
# create an instance of ClaimDeviceResponse from a dict
claim_device_response_from_dict = ClaimDeviceResponse.from_dict(claim_device_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


