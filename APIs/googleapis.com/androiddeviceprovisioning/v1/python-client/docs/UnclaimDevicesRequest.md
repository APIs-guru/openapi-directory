# UnclaimDevicesRequest

Request to unclaim devices asynchronously in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unclaims** | [**List[PartnerUnclaim]**](PartnerUnclaim.md) | Required. The list of devices to unclaim. | [optional] 

## Example

```python
from openapi_client.models.unclaim_devices_request import UnclaimDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnclaimDevicesRequest from a JSON string
unclaim_devices_request_instance = UnclaimDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(UnclaimDevicesRequest.to_json())

# convert the object into a dict
unclaim_devices_request_dict = unclaim_devices_request_instance.to_dict()
# create an instance of UnclaimDevicesRequest from a dict
unclaim_devices_request_from_dict = UnclaimDevicesRequest.from_dict(unclaim_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


