# HubPropertiesFormat

Properties of hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_endpoint** | **str** | API endpoint URL of the hub. | [optional] [readonly] 
**hub_billing_info** | [**HubBillingInfoFormat**](HubBillingInfoFormat.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the hub. | [optional] [readonly] 
**tenant_features** | **int** | The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0. | [optional] 
**web_endpoint** | **str** | Web endpoint URL of the hub. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hub_properties_format import HubPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of HubPropertiesFormat from a JSON string
hub_properties_format_instance = HubPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(HubPropertiesFormat.to_json())

# convert the object into a dict
hub_properties_format_dict = hub_properties_format_instance.to_dict()
# create an instance of HubPropertiesFormat from a dict
hub_properties_format_from_dict = HubPropertiesFormat.from_dict(hub_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


