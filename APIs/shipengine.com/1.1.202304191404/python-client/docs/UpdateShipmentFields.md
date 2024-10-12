# UpdateShipmentFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validate_address** | [**ValidateAddress**](ValidateAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_shipment_fields import UpdateShipmentFields

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateShipmentFields from a JSON string
update_shipment_fields_instance = UpdateShipmentFields.from_json(json)
# print the JSON string representation of the object
print(UpdateShipmentFields.to_json())

# convert the object into a dict
update_shipment_fields_dict = update_shipment_fields_instance.to_dict()
# create an instance of UpdateShipmentFields from a dict
update_shipment_fields_from_dict = UpdateShipmentFields.from_dict(update_shipment_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


