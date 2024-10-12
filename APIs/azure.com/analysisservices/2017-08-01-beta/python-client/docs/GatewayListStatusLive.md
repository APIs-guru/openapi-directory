# GatewayListStatusLive

Status of gateway is live.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Live message of list gateway. | [optional] 

## Example

```python
from openapi_client.models.gateway_list_status_live import GatewayListStatusLive

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayListStatusLive from a JSON string
gateway_list_status_live_instance = GatewayListStatusLive.from_json(json)
# print the JSON string representation of the object
print(GatewayListStatusLive.to_json())

# convert the object into a dict
gateway_list_status_live_dict = gateway_list_status_live_instance.to_dict()
# create an instance of GatewayListStatusLive from a dict
gateway_list_status_live_from_dict = GatewayListStatusLive.from_dict(gateway_list_status_live_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


