# DeviceListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | **List[object]** |  | 

## Example

```python
from openapi_client.models.device_list_response import DeviceListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceListResponse from a JSON string
device_list_response_instance = DeviceListResponse.from_json(json)
# print the JSON string representation of the object
print(DeviceListResponse.to_json())

# convert the object into a dict
device_list_response_dict = device_list_response_instance.to_dict()
# create an instance of DeviceListResponse from a dict
device_list_response_from_dict = DeviceListResponse.from_dict(device_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


