# DevicesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**List[Device]**](Device.md) | A managed device. | [optional] 

## Example

```python
from openapi_client.models.devices_list_response import DevicesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DevicesListResponse from a JSON string
devices_list_response_instance = DevicesListResponse.from_json(json)
# print the JSON string representation of the object
print(DevicesListResponse.to_json())

# convert the object into a dict
devices_list_response_dict = devices_list_response_instance.to_dict()
# create an instance of DevicesListResponse from a dict
devices_list_response_from_dict = DevicesListResponse.from_dict(devices_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


