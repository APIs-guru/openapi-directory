# ShipmentTrackingInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | The shipping carrier that handles the package. Acceptable values are: - \&quot;&#x60;boxtal&#x60;\&quot; - \&quot;&#x60;bpost&#x60;\&quot; - \&quot;&#x60;chronopost&#x60;\&quot; - \&quot;&#x60;colisPrive&#x60;\&quot; - \&quot;&#x60;colissimo&#x60;\&quot; - \&quot;&#x60;cxt&#x60;\&quot; - \&quot;&#x60;deliv&#x60;\&quot; - \&quot;&#x60;dhl&#x60;\&quot; - \&quot;&#x60;dpd&#x60;\&quot; - \&quot;&#x60;dynamex&#x60;\&quot; - \&quot;&#x60;eCourier&#x60;\&quot; - \&quot;&#x60;easypost&#x60;\&quot; - \&quot;&#x60;efw&#x60;\&quot; - \&quot;&#x60;fedex&#x60;\&quot; - \&quot;&#x60;fedexSmartpost&#x60;\&quot; - \&quot;&#x60;geodis&#x60;\&quot; - \&quot;&#x60;gls&#x60;\&quot; - \&quot;&#x60;googleCourier&#x60;\&quot; - \&quot;&#x60;gsx&#x60;\&quot; - \&quot;&#x60;jdLogistics&#x60;\&quot; - \&quot;&#x60;laPoste&#x60;\&quot; - \&quot;&#x60;lasership&#x60;\&quot; - \&quot;&#x60;manual&#x60;\&quot; - \&quot;&#x60;mpx&#x60;\&quot; - \&quot;&#x60;onTrac&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot; - \&quot;&#x60;tnt&#x60;\&quot; - \&quot;&#x60;uds&#x60;\&quot; - \&quot;&#x60;ups&#x60;\&quot; - \&quot;&#x60;usps&#x60;\&quot;  | [optional] 
**tracking_number** | **str** | The tracking number for the package. | [optional] 

## Example

```python
from openapi_client.models.shipment_tracking_info import ShipmentTrackingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentTrackingInfo from a JSON string
shipment_tracking_info_instance = ShipmentTrackingInfo.from_json(json)
# print the JSON string representation of the object
print(ShipmentTrackingInfo.to_json())

# convert the object into a dict
shipment_tracking_info_dict = shipment_tracking_info_instance.to_dict()
# create an instance of ShipmentTrackingInfo from a dict
shipment_tracking_info_from_dict = ShipmentTrackingInfo.from_dict(shipment_tracking_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


