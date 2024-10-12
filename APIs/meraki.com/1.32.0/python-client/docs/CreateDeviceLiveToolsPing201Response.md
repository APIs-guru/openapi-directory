# CreateDeviceLiveToolsPing201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ping_id** | **str** | Id to check the status of your ping request. | [optional] 
**request** | [**CreateDeviceLiveToolsPing201ResponseRequest**](CreateDeviceLiveToolsPing201ResponseRequest.md) |  | [optional] 
**status** | **str** | Status of the ping request. | [optional] 
**url** | **str** | GET this url to check the status of your ping request. | [optional] 

## Example

```python
from openapi_client.models.create_device_live_tools_ping201_response import CreateDeviceLiveToolsPing201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceLiveToolsPing201Response from a JSON string
create_device_live_tools_ping201_response_instance = CreateDeviceLiveToolsPing201Response.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceLiveToolsPing201Response.to_json())

# convert the object into a dict
create_device_live_tools_ping201_response_dict = create_device_live_tools_ping201_response_instance.to_dict()
# create an instance of CreateDeviceLiveToolsPing201Response from a dict
create_device_live_tools_ping201_response_from_dict = CreateDeviceLiveToolsPing201Response.from_dict(create_device_live_tools_ping201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


