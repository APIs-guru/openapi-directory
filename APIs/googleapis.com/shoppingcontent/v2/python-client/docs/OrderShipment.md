# OrderShipment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. *Note:* You can also use unsupported carriers, but emails to customers will not include the carrier name or tracking URL, and there will be no automatic order status updates. Supported carriers for US are: - \&quot;&#x60;ups&#x60;\&quot; (United Parcel Service) *automatic status updates* - \&quot;&#x60;usps&#x60;\&quot; (United States Postal Service) *automatic status updates* - \&quot;&#x60;fedex&#x60;\&quot; (FedEx) *automatic status updates * - \&quot;&#x60;dhl&#x60;\&quot; (DHL eCommerce) *automatic status updates* (US only) - \&quot;&#x60;ontrac&#x60;\&quot; (OnTrac) *automatic status updates * - \&quot;&#x60;dhl express&#x60;\&quot; (DHL Express) - \&quot;&#x60;deliv&#x60;\&quot; (Deliv) - \&quot;&#x60;dynamex&#x60;\&quot; (TForce) - \&quot;&#x60;lasership&#x60;\&quot; (LaserShip) - \&quot;&#x60;mpx&#x60;\&quot; (Military Parcel Xpress) - \&quot;&#x60;uds&#x60;\&quot; (United Delivery Service) - \&quot;&#x60;efw&#x60;\&quot; (Estes Forwarding Worldwide) - \&quot;&#x60;jd logistics&#x60;\&quot; (JD Logistics) - \&quot;&#x60;yunexpress&#x60;\&quot; (YunExpress) - \&quot;&#x60;china post&#x60;\&quot; (China Post) - \&quot;&#x60;china ems&#x60;\&quot; (China Post Express Mail Service) - \&quot;&#x60;singapore post&#x60;\&quot; (Singapore Post) - \&quot;&#x60;pos malaysia&#x60;\&quot; (Pos Malaysia) - \&quot;&#x60;postnl&#x60;\&quot; (PostNL) - \&quot;&#x60;ptt&#x60;\&quot; (PTT Turkish Post) - \&quot;&#x60;eub&#x60;\&quot; (ePacket) - \&quot;&#x60;chukou1&#x60;\&quot; (Chukou1 Logistics) - \&quot;&#x60;bestex&#x60;\&quot; (Best Express) - \&quot;&#x60;canada post&#x60;\&quot; (Canada Post) - \&quot;&#x60;purolator&#x60;\&quot; (Purolator) - \&quot;&#x60;canpar&#x60;\&quot; (Canpar) - \&quot;&#x60;india post&#x60;\&quot; (India Post) - \&quot;&#x60;blue dart&#x60;\&quot; (Blue Dart) - \&quot;&#x60;delhivery&#x60;\&quot; (Delhivery) - \&quot;&#x60;dtdc&#x60;\&quot; (DTDC) - \&quot;&#x60;tpc india&#x60;\&quot; (TPC India) Supported carriers for FR are: - \&quot;&#x60;la poste&#x60;\&quot; (La Poste) *automatic status updates * - \&quot;&#x60;colissimo&#x60;\&quot; (Colissimo by La Poste) *automatic status updates* - \&quot;&#x60;ups&#x60;\&quot; (United Parcel Service) *automatic status updates * - \&quot;&#x60;chronopost&#x60;\&quot; (Chronopost by La Poste) - \&quot;&#x60;gls&#x60;\&quot; (General Logistics Systems France) - \&quot;&#x60;dpd&#x60;\&quot; (DPD Group by GeoPost) - \&quot;&#x60;bpost&#x60;\&quot; (Belgian Post Group) - \&quot;&#x60;colis prive&#x60;\&quot; (Colis Privé) - \&quot;&#x60;boxtal&#x60;\&quot; (Boxtal) - \&quot;&#x60;geodis&#x60;\&quot; (GEODIS) - \&quot;&#x60;tnt&#x60;\&quot; (TNT) - \&quot;&#x60;db schenker&#x60;\&quot; (DB Schenker) - \&quot;&#x60;aramex&#x60;\&quot; (Aramex)  | [optional] 
**creation_date** | **str** | Date on which the shipment has been created, in ISO 8601 format. | [optional] 
**delivery_date** | **str** | Date on which the shipment has been delivered, in ISO 8601 format. Present only if &#x60;status&#x60; is &#x60;delivered&#x60; | [optional] 
**id** | **str** | The ID of the shipment. | [optional] 
**line_items** | [**List[OrderShipmentLineItemShipment]**](OrderShipmentLineItemShipment.md) | The line items that are shipped. | [optional] 
**scheduled_delivery_details** | [**OrderShipmentScheduledDeliveryDetails**](OrderShipmentScheduledDeliveryDetails.md) |  | [optional] 
**status** | **str** | The status of the shipment. Acceptable values are: - \&quot;&#x60;delivered&#x60;\&quot; - \&quot;&#x60;readyForPickup&#x60;\&quot; - \&quot;&#x60;shipped&#x60;\&quot; - \&quot;&#x60;undeliverable&#x60;\&quot;  | [optional] 
**tracking_id** | **str** | The tracking ID for the shipment. | [optional] 

## Example

```python
from openapi_client.models.order_shipment import OrderShipment

# TODO update the JSON string below
json = "{}"
# create an instance of OrderShipment from a JSON string
order_shipment_instance = OrderShipment.from_json(json)
# print the JSON string representation of the object
print(OrderShipment.to_json())

# convert the object into a dict
order_shipment_dict = order_shipment_instance.to_dict()
# create an instance of OrderShipment from a dict
order_shipment_from_dict = OrderShipment.from_dict(order_shipment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


