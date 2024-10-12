# WcfRelay

Description of WcfRelays Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WcfRelayProperties**](WcfRelayProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.wcf_relay import WcfRelay

# TODO update the JSON string below
json = "{}"
# create an instance of WcfRelay from a JSON string
wcf_relay_instance = WcfRelay.from_json(json)
# print the JSON string representation of the object
print(WcfRelay.to_json())

# convert the object into a dict
wcf_relay_dict = wcf_relay_instance.to_dict()
# create an instance of WcfRelay from a dict
wcf_relay_from_dict = WcfRelay.from_dict(wcf_relay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


