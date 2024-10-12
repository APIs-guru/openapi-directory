# GetNetworkHealthAlerts200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category of the alert | [optional] 
**id** | **str** | Alert identifier. Value can be empty | [optional] 
**scope** | [**GetNetworkHealthAlerts200ResponseInnerScope**](GetNetworkHealthAlerts200ResponseInnerScope.md) |  | [optional] 
**severity** | **str** | Severity of the alert | [optional] 
**type** | **str** | Alert type | [optional] 

## Example

```python
from openapi_client.models.get_network_health_alerts200_response_inner import GetNetworkHealthAlerts200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkHealthAlerts200ResponseInner from a JSON string
get_network_health_alerts200_response_inner_instance = GetNetworkHealthAlerts200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkHealthAlerts200ResponseInner.to_json())

# convert the object into a dict
get_network_health_alerts200_response_inner_dict = get_network_health_alerts200_response_inner_instance.to_dict()
# create an instance of GetNetworkHealthAlerts200ResponseInner from a dict
get_network_health_alerts200_response_inner_from_dict = GetNetworkHealthAlerts200ResponseInner.from_dict(get_network_health_alerts200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


