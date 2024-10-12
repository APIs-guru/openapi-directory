# CreateDeviceLiveToolsPingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count parameter to pass to ping. [1..5], default 5 | [optional] 
**target** | **str** | FQDN, IPv4 or IPv6 address | 

## Example

```python
from openapi_client.models.create_device_live_tools_ping_request import CreateDeviceLiveToolsPingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceLiveToolsPingRequest from a JSON string
create_device_live_tools_ping_request_instance = CreateDeviceLiveToolsPingRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceLiveToolsPingRequest.to_json())

# convert the object into a dict
create_device_live_tools_ping_request_dict = create_device_live_tools_ping_request_instance.to_dict()
# create an instance of CreateDeviceLiveToolsPingRequest from a dict
create_device_live_tools_ping_request_from_dict = CreateDeviceLiveToolsPingRequest.from_dict(create_device_live_tools_ping_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


