# DeliveryParty

The party receiving the shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | [**Party**](Party.md) |  | 

## Example

```python
from openapi_client.models.delivery_party import DeliveryParty

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryParty from a JSON string
delivery_party_instance = DeliveryParty.from_json(json)
# print the JSON string representation of the object
print(DeliveryParty.to_json())

# convert the object into a dict
delivery_party_dict = delivery_party_instance.to_dict()
# create an instance of DeliveryParty from a dict
delivery_party_from_dict = DeliveryParty.from_dict(delivery_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


