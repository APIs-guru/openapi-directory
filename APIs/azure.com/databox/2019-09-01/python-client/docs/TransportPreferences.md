# TransportPreferences

Preferences related to the shipment logistics of the sku

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferred_shipment_type** | **str** | Indicates Shipment Logistics type that the customer preferred. | 

## Example

```python
from openapi_client.models.transport_preferences import TransportPreferences

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPreferences from a JSON string
transport_preferences_instance = TransportPreferences.from_json(json)
# print the JSON string representation of the object
print(TransportPreferences.to_json())

# convert the object into a dict
transport_preferences_dict = transport_preferences_instance.to_dict()
# create an instance of TransportPreferences from a dict
transport_preferences_from_dict = TransportPreferences.from_dict(transport_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


