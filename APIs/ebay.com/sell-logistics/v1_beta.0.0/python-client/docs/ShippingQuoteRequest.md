# ShippingQuoteRequest

This complex type defines the request body for <b>createShippingQuote</b>. Sellers <i>request a quote</i> for a shipment by defining the \"To\" and \"From\" addresses for the package, plus the package's size.  <br><br>Carriers respond by offering up a \"rate\" for the service of theirs that best fits seller's needs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orders** | [**List[Order]**](Order.md) | A seller-defined list that contains information about the orders in the package. This allows sellers to include information about the line items in the package with the shipment information.  &lt;br&gt;&lt;br&gt;A package can contain any number of line items from one or more orders, providing they all ship in the same package.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Maximum list size:&lt;/b&gt; 10 | [optional] 
**package_specification** | [**PackageSpecification**](PackageSpecification.md) |  | [optional] 
**ship_from** | [**Contact**](Contact.md) |  | [optional] 
**ship_to** | [**Contact**](Contact.md) |  | [optional] 

## Example

```python
from openapi_client.models.shipping_quote_request import ShippingQuoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingQuoteRequest from a JSON string
shipping_quote_request_instance = ShippingQuoteRequest.from_json(json)
# print the JSON string representation of the object
print(ShippingQuoteRequest.to_json())

# convert the object into a dict
shipping_quote_request_dict = shipping_quote_request_instance.to_dict()
# create an instance of ShippingQuoteRequest from a dict
shipping_quote_request_from_dict = ShippingQuoteRequest.from_dict(shipping_quote_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


