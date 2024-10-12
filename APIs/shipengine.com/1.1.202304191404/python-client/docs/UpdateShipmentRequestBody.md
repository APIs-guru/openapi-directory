# UpdateShipmentRequestBody

An update shipment request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_options** | [**AdvancedShipmentOptions**](AdvancedShipmentOptions.md) | Advanced shipment options.  These are entirely optional. | [optional] 
**carrier_id** | **str** | The carrier account that is billed for the shipping charges | [optional] 
**confirmation** | [**DeliveryConfirmation**](DeliveryConfirmation.md) | The type of delivery confirmation that is required for this shipment. | [optional] 
**created_at** | **datetime** | The date and time that the shipment was created in ShipEngine. | [optional] [readonly] 
**customs** | [**InternationalShipmentOptions**](InternationalShipmentOptions.md) | Customs information.  This is usually only needed for international shipments.  | [optional] 
**external_order_id** | **str** | ID that the Order Source assigned | [optional] 
**external_shipment_id** | **str** | A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.  &gt; **Warning:** The &#x60;external_shipment_id&#x60; is limited to 50 characters. Any additional characters will be truncated.  | [optional] 
**insurance_provider** | [**InsuranceProvider**](InsuranceProvider.md) | The insurance provider to use for any insured packages in the shipment.  | [optional] 
**is_return** | **bool** | An optional indicator if the shipment is intended to be a return. Defaults to false if not provided.  | [optional] [default to False]
**items** | [**List[ShipmentItem]**](ShipmentItem.md) | Describe the packages included in this shipment as related to potential metadata that was imported from external order sources  | [optional] [default to []]
**modified_at** | **datetime** | The date and time that the shipment was created or last modified. | [optional] [readonly] 
**order_source_code** | [**OrderSourceName**](OrderSourceName.md) |  | [optional] 
**origin_type** | [**OriginType**](OriginType.md) | Indicates if the package will be picked up or dropped off by the carrier | [optional] 
**packages** | [**List[Package]**](Package.md) | The packages in the shipment.  &gt; **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn&#39;t allow it, an error will be returned.  | [optional] 
**return_to** | [**ShippingAddress**](ShippingAddress.md) | The return address for this shipment.  Defaults to the &#x60;ship_from&#x60; address.  | [optional] 
**service_code** | **str** | The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as &#x60;fedex_ground&#x60;, &#x60;usps_first_class_mail&#x60;, &#x60;flat_rate_envelope&#x60;, etc.  | [optional] 
**ship_date** | **datetime** | The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.  | [optional] 
**ship_from** | [**ShippingAddress**](ShippingAddress.md) | The shipment&#39;s origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the &#x60;warehouse_id&#x60; rather than the complete address each time.  | 
**ship_to** | [**ShippingAddress**](ShippingAddress.md) | The recipient&#39;s mailing address | 
**shipment_id** | **str** | A string that uniquely identifies the shipment | [optional] [readonly] 
**shipment_number** | **str** | A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.  &gt; **Warning:** The &#x60;shipment_number&#x60; is limited to 50 characters. Any additional characters will be truncated.  | [optional] 
**shipment_status** | [**ShipmentStatus**](ShipmentStatus.md) | The current status of the shipment | [optional] [readonly] 
**tags** | [**List[Tag]**](Tag.md) | Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.  | [optional] [readonly] [default to []]
**tax_identifiers** | [**List[TaxIdentifier]**](TaxIdentifier.md) |  | [optional] 
**total_weight** | [**Weight**](Weight.md) | The combined weight of all packages in the shipment | [optional] [readonly] 
**warehouse_id** | **str** | The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either &#x60;warehouse_id&#x60; or &#x60;ship_from&#x60; must be specified.  | [optional] 
**validate_address** | [**ValidateAddress**](ValidateAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_shipment_request_body import UpdateShipmentRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateShipmentRequestBody from a JSON string
update_shipment_request_body_instance = UpdateShipmentRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateShipmentRequestBody.to_json())

# convert the object into a dict
update_shipment_request_body_dict = update_shipment_request_body_instance.to_dict()
# create an instance of UpdateShipmentRequestBody from a dict
update_shipment_request_body_from_dict = UpdateShipmentRequestBody.from_dict(update_shipment_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


