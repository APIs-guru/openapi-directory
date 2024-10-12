# GetDeviceLiveToolsPing200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ping_id** | **str** | Id to check the status of your ping request. | [optional] 
**request** | [**CreateDeviceLiveToolsPing201ResponseRequest**](CreateDeviceLiveToolsPing201ResponseRequest.md) |  | [optional] 
**results** | [**GetDeviceLiveToolsPing200ResponseResults**](GetDeviceLiveToolsPing200ResponseResults.md) |  | [optional] 
**status** | **str** | Status of the ping request. | [optional] 
**url** | **str** | GET this url to check the status of your ping request. | [optional] 

## Example

```python
from openapi_client.models.get_device_live_tools_ping200_response import GetDeviceLiveToolsPing200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceLiveToolsPing200Response from a JSON string
get_device_live_tools_ping200_response_instance = GetDeviceLiveToolsPing200Response.from_json(json)
# print the JSON string representation of the object
print(GetDeviceLiveToolsPing200Response.to_json())

# convert the object into a dict
get_device_live_tools_ping200_response_dict = get_device_live_tools_ping200_response_instance.to_dict()
# create an instance of GetDeviceLiveToolsPing200Response from a dict
get_device_live_tools_ping200_response_from_dict = GetDeviceLiveToolsPing200Response.from_dict(get_device_live_tools_ping200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


