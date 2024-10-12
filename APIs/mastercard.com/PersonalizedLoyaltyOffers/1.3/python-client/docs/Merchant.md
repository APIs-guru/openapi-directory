# Merchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The type of retailer to which the offer applies. | [optional] 
**merchant_distance** | **str** | Reserved for future use. | [optional] 
**name** | **str** | Display name for the retailer to which the offer applies. | [optional] 
**store_locator_url** | **str** | Web page where retailer outlets can be found. | [optional] 
**website_url** | **str** | The internet address of the retailer. | [optional] 

## Example

```python
from openapi_client.models.merchant import Merchant

# TODO update the JSON string below
json = "{}"
# create an instance of Merchant from a JSON string
merchant_instance = Merchant.from_json(json)
# print the JSON string representation of the object
print(Merchant.to_json())

# convert the object into a dict
merchant_dict = merchant_instance.to_dict()
# create an instance of Merchant from a dict
merchant_from_dict = Merchant.from_dict(merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


