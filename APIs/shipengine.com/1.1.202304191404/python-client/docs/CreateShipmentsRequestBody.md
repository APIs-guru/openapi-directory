# CreateShipmentsRequestBody

A create shipments request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipments** | [**List[AddressValidatingShipment]**](AddressValidatingShipment.md) | An array of shipments to be created. | 

## Example

```python
from openapi_client.models.create_shipments_request_body import CreateShipmentsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateShipmentsRequestBody from a JSON string
create_shipments_request_body_instance = CreateShipmentsRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreateShipmentsRequestBody.to_json())

# convert the object into a dict
create_shipments_request_body_dict = create_shipments_request_body_instance.to_dict()
# create an instance of CreateShipmentsRequestBody from a dict
create_shipments_request_body_from_dict = CreateShipmentsRequestBody.from_dict(create_shipments_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


