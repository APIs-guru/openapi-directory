# ShipmentCancellation

This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_requested_date** | **str** | The time and date the request was made to cancel the shipment, formatted as an &lt;a href&#x3D;\&quot;https://www.iso.org/iso-8601-date-and-time-format.html\&quot; title&#x3D;\&quot;https://www.iso.org\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 8601&lt;/a&gt; UTC string. | [optional] 
**cancellation_status** | **str** | This enum specifies the current cancellation status of a shipment, if a cancellation request has been made. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/logistics/types/api:ShipmentCancellationStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.shipment_cancellation import ShipmentCancellation

# TODO update the JSON string below
json = "{}"
# create an instance of ShipmentCancellation from a JSON string
shipment_cancellation_instance = ShipmentCancellation.from_json(json)
# print the JSON string representation of the object
print(ShipmentCancellation.to_json())

# convert the object into a dict
shipment_cancellation_dict = shipment_cancellation_instance.to_dict()
# create an instance of ShipmentCancellation from a dict
shipment_cancellation_from_dict = ShipmentCancellation.from_dict(shipment_cancellation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


