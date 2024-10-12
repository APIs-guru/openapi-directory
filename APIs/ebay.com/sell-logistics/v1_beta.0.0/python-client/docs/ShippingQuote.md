# ShippingQuote

This complex type describes a \"shipping quote,\" which contains the parameters for a package shipment. The shipping quote contains a list of \"live quotes\" or <i>rates</i> for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller.  <br><br>Use the <b>rateId</b> value to select the specific service you want when you create a shipment by calling <b>createFromShippingQuote</b>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **str** | The date and time this quote was created, expressed as an ISO 8601 UTC string. | [optional] 
**expiration_date** | **str** | The last date and time that this quote will be honored, expressed as an ISO 8601 UTC string. After this time the quote expires and the expressed rates can no longer be purchased. | [optional] 
**orders** | [**List[Order]**](Order.md) | This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders. | [optional] 
**package_specification** | [**PackageSpecification**](PackageSpecification.md) |  | [optional] 
**rates** | [**List[Rate]**](Rate.md) | A list of &lt;i&gt;rates&lt;/i&gt; where each rate, as identified by a &lt;b&gt;rateId&lt;/b&gt;, contains information about a specific shipping service offered by a carrier.  Rates include shipping carrier and service, the to and from locations, the pickup and delivery windows, the seller&#39;s shipping parameters, the service constraints, and the cost for the base service and a list of additional shipping options.  &lt;br&gt;&lt;br&gt;Each rate offered is supported by a label service where you can purchase the rate, and associated shipping label, via a call to &lt;b&gt;createFromShippingQuote&lt;/b&gt;. | [optional] 
**ship_from** | [**Contact**](Contact.md) |  | [optional] 
**ship_to** | [**Contact**](Contact.md) |  | [optional] 
**shipping_quote_id** | **str** | The unique eBay-assigned ID for this shipping quote. The value of this field is associated with a specific package, based on its origin, destination, and size. | [optional] 
**warnings** | [**List[Error]**](Error.md) | A list of any warnings triggered by the request. | [optional] 

## Example

```python
from openapi_client.models.shipping_quote import ShippingQuote

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingQuote from a JSON string
shipping_quote_instance = ShippingQuote.from_json(json)
# print the JSON string representation of the object
print(ShippingQuote.to_json())

# convert the object into a dict
shipping_quote_dict = shipping_quote_instance.to_dict()
# create an instance of ShippingQuote from a dict
shipping_quote_from_dict = ShippingQuote.from_dict(shipping_quote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


