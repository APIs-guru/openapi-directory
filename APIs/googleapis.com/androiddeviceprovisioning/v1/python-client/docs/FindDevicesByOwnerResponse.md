# FindDevicesByOwnerResponse

Response containing found devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[Device]**](Device.md) | The customer&#39;s devices. | [optional] 
**next_page_token** | **str** | A token used to access the next page of results. Omitted if no further results are available. | [optional] 
**total_size** | **int** | The total count of items in the list irrespective of pagination. | [optional] 

## Example

```python
from openapi_client.models.find_devices_by_owner_response import FindDevicesByOwnerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FindDevicesByOwnerResponse from a JSON string
find_devices_by_owner_response_instance = FindDevicesByOwnerResponse.from_json(json)
# print the JSON string representation of the object
print(FindDevicesByOwnerResponse.to_json())

# convert the object into a dict
find_devices_by_owner_response_dict = find_devices_by_owner_response_instance.to_dict()
# create an instance of FindDevicesByOwnerResponse from a dict
find_devices_by_owner_response_from_dict = FindDevicesByOwnerResponse.from_dict(find_devices_by_owner_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


