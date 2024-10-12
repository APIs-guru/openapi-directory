# InternationalShipmentOptions

Options for international shipments, such as customs declarations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | [**PackageContents**](PackageContents.md) | The type of contents in this shipment.  This may impact import duties or customs treatment. | 
**customs_items** | [**List[CustomsItem]**](CustomsItem.md) | Customs declarations for each item in the shipment. | [optional] [default to []]
**non_delivery** | [**NonDelivery**](NonDelivery.md) | Indicates what to do if a package is unable to be delivered. | 

## Example

```python
from openapi_client.models.international_shipment_options import InternationalShipmentOptions

# TODO update the JSON string below
json = "{}"
# create an instance of InternationalShipmentOptions from a JSON string
international_shipment_options_instance = InternationalShipmentOptions.from_json(json)
# print the JSON string representation of the object
print(InternationalShipmentOptions.to_json())

# convert the object into a dict
international_shipment_options_dict = international_shipment_options_instance.to_dict()
# create an instance of InternationalShipmentOptions from a dict
international_shipment_options_from_dict = InternationalShipmentOptions.from_dict(international_shipment_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


