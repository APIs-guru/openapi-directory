# OrderAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | CLDR country code (for example, \&quot;US\&quot;). | [optional] 
**full_address** | **List[str]** | Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States  | [optional] 
**is_post_office_box** | **bool** | Whether the address is a post office box. | [optional] 
**locality** | **str** | City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). | [optional] 
**postal_code** | **str** | Postal Code or ZIP (for example, \&quot;94043\&quot;). | [optional] 
**recipient_name** | **str** | Name of the recipient. | [optional] 
**region** | **str** | Top-level administrative subdivision of the country. For example, a state like California (\&quot;CA\&quot;) or a province like Quebec (\&quot;QC\&quot;). | [optional] 
**street_address** | **List[str]** | Street-level part of the address. Use &#x60;\\n&#x60; to add a second line. | [optional] 

## Example

```python
from openapi_client.models.order_address import OrderAddress

# TODO update the JSON string below
json = "{}"
# create an instance of OrderAddress from a JSON string
order_address_instance = OrderAddress.from_json(json)
# print the JSON string representation of the object
print(OrderAddress.to_json())

# convert the object into a dict
order_address_dict = order_address_instance.to_dict()
# create an instance of OrderAddress from a dict
order_address_from_dict = OrderAddress.from_dict(order_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


