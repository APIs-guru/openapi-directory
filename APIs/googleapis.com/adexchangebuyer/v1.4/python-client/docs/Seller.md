# Seller


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product. | [optional] 
**sub_account_id** | **str** | Optional sub-account id for the seller. | [optional] 

## Example

```python
from openapi_client.models.seller import Seller

# TODO update the JSON string below
json = "{}"
# create an instance of Seller from a JSON string
seller_instance = Seller.from_json(json)
# print the JSON string representation of the object
print(Seller.to_json())

# convert the object into a dict
seller_dict = seller_instance.to_dict()
# create an instance of Seller from a dict
seller_from_dict = Seller.from_dict(seller_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


