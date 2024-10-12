# ListDeviceTierConfigsResponse

Response listing existing device tier configs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_tier_configs** | [**List[DeviceTierConfig]**](DeviceTierConfig.md) | Device tier configs created by the developer. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_device_tier_configs_response import ListDeviceTierConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDeviceTierConfigsResponse from a JSON string
list_device_tier_configs_response_instance = ListDeviceTierConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDeviceTierConfigsResponse.to_json())

# convert the object into a dict
list_device_tier_configs_response_dict = list_device_tier_configs_response_instance.to_dict()
# create an instance of ListDeviceTierConfigsResponse from a dict
list_device_tier_configs_response_from_dict = ListDeviceTierConfigsResponse.from_dict(list_device_tier_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


