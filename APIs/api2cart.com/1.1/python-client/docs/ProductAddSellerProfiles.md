# ProductAddSellerProfiles

If the seller is subscribed to \"Business Policies\", use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.<hr><div style=\"font-style:normal\">Param structure:<div style=\"margin-left: 2%;\"><code style=\"padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\">seller_profiles[<b>shipping_profile_id</b>] = integer</br>seller_profiles[<b>payment_profile_id</b>] = integer</br>seller_profiles[<b>return_profile_id</b>] = integer</br></code></div></div>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_profile_id** | **str** |  | [optional] 
**return_profile_id** | **str** |  | [optional] 
**shipping_profile_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_add_seller_profiles import ProductAddSellerProfiles

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAddSellerProfiles from a JSON string
product_add_seller_profiles_instance = ProductAddSellerProfiles.from_json(json)
# print the JSON string representation of the object
print(ProductAddSellerProfiles.to_json())

# convert the object into a dict
product_add_seller_profiles_dict = product_add_seller_profiles_instance.to_dict()
# create an instance of ProductAddSellerProfiles from a dict
product_add_seller_profiles_from_dict = ProductAddSellerProfiles.from_dict(product_add_seller_profiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


