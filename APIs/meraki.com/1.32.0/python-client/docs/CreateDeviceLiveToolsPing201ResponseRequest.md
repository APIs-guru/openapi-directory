# CreateDeviceLiveToolsPing201ResponseRequest

Ping request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of pings to send | [optional] 
**serial** | **str** | Device serial number | [optional] 
**target** | **str** | IP address or FQDN to ping | [optional] 

## Example

```python
from openapi_client.models.create_device_live_tools_ping201_response_request import CreateDeviceLiveToolsPing201ResponseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceLiveToolsPing201ResponseRequest from a JSON string
create_device_live_tools_ping201_response_request_instance = CreateDeviceLiveToolsPing201ResponseRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceLiveToolsPing201ResponseRequest.to_json())

# convert the object into a dict
create_device_live_tools_ping201_response_request_dict = create_device_live_tools_ping201_response_request_instance.to_dict()
# create an instance of CreateDeviceLiveToolsPing201ResponseRequest from a dict
create_device_live_tools_ping201_response_request_from_dict = CreateDeviceLiveToolsPing201ResponseRequest.from_dict(create_device_live_tools_ping201_response_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


