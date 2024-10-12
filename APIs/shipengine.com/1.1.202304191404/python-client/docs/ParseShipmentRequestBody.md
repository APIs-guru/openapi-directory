# ParseShipmentRequestBody

The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipment** | [**PartialShipment**](PartialShipment.md) | You can optionally provide a &#x60;shipment&#x60; object containing any already-known values. For example, you probably already know the &#x60;ship_from&#x60; address, and you may also already know what carrier and service you want to use.  | [optional] 
**text** | **str** | The unstructured text that contains shipping-related entities | 

## Example

```python
from openapi_client.models.parse_shipment_request_body import ParseShipmentRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ParseShipmentRequestBody from a JSON string
parse_shipment_request_body_instance = ParseShipmentRequestBody.from_json(json)
# print the JSON string representation of the object
print(ParseShipmentRequestBody.to_json())

# convert the object into a dict
parse_shipment_request_body_dict = parse_shipment_request_body_instance.to_dict()
# create an instance of ParseShipmentRequestBody from a dict
parse_shipment_request_body_from_dict = ParseShipmentRequestBody.from_dict(parse_shipment_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


