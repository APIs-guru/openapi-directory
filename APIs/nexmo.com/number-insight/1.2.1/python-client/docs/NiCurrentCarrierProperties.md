# NiCurrentCarrierProperties

Information about the network `number` is currently connected to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country that &#x60;number&#x60; is associated with. This is in ISO 3166-1 alpha-2   format. | [optional] 
**name** | **str** | The full name of the carrier that &#x60;number&#x60; is associated with. | [optional] 
**network_code** | **str** | The [https://en.wikipedia.org/wiki/Mobile_country_code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier&#x60;number&#x60; is associated with. Unreal numbers are marked as&#x60;null&#x60; and the request is rejected altogether if the number is impossible according to the [E.164](https://en.wikipedia.org/wiki/E.164) guidelines. | [optional] 
**network_type** | **str** | The type of network that &#x60;number&#x60; is associated with. | [optional] 

## Example

```python
from openapi_client.models.ni_current_carrier_properties import NiCurrentCarrierProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NiCurrentCarrierProperties from a JSON string
ni_current_carrier_properties_instance = NiCurrentCarrierProperties.from_json(json)
# print the JSON string representation of the object
print(NiCurrentCarrierProperties.to_json())

# convert the object into a dict
ni_current_carrier_properties_dict = ni_current_carrier_properties_instance.to_dict()
# create an instance of NiCurrentCarrierProperties from a dict
ni_current_carrier_properties_from_dict = NiCurrentCarrierProperties.from_dict(ni_current_carrier_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


