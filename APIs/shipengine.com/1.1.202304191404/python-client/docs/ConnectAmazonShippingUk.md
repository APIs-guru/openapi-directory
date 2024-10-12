# ConnectAmazonShippingUk

An Amazon Shipping UK account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_code** | **str** | Amazon UK Shipping auth code. | 
**nickname** | **str** | The nickname associated with the carrier connection | 

## Example

```python
from openapi_client.models.connect_amazon_shipping_uk import ConnectAmazonShippingUk

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectAmazonShippingUk from a JSON string
connect_amazon_shipping_uk_instance = ConnectAmazonShippingUk.from_json(json)
# print the JSON string representation of the object
print(ConnectAmazonShippingUk.to_json())

# convert the object into a dict
connect_amazon_shipping_uk_dict = connect_amazon_shipping_uk_instance.to_dict()
# create an instance of ConnectAmazonShippingUk from a dict
connect_amazon_shipping_uk_from_dict = ConnectAmazonShippingUk.from_dict(connect_amazon_shipping_uk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


