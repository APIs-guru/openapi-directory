# ValidateShipmentFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validate_address** | [**ValidateAddress**](ValidateAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_shipment_fields import ValidateShipmentFields

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateShipmentFields from a JSON string
validate_shipment_fields_instance = ValidateShipmentFields.from_json(json)
# print the JSON string representation of the object
print(ValidateShipmentFields.to_json())

# convert the object into a dict
validate_shipment_fields_dict = validate_shipment_fields_instance.to_dict()
# create an instance of ValidateShipmentFields from a dict
validate_shipment_fields_from_dict = ValidateShipmentFields.from_dict(validate_shipment_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


