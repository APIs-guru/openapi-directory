# CreateShipmentResponseBodyFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_validation** | [**AddressValidationResult**](AddressValidationResult.md) | The address validation | [optional] 
**errors** | **List[str]** | An array of errors that occurred while creating shipment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.create_shipment_response_body_fields import CreateShipmentResponseBodyFields

# TODO update the JSON string below
json = "{}"
# create an instance of CreateShipmentResponseBodyFields from a JSON string
create_shipment_response_body_fields_instance = CreateShipmentResponseBodyFields.from_json(json)
# print the JSON string representation of the object
print(CreateShipmentResponseBodyFields.to_json())

# convert the object into a dict
create_shipment_response_body_fields_dict = create_shipment_response_body_fields_instance.to_dict()
# create an instance of CreateShipmentResponseBodyFields from a dict
create_shipment_response_body_fields_from_dict = CreateShipmentResponseBodyFields.from_dict(create_shipment_response_body_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


