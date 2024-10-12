# SellerItemStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Defines if this product is ready for sale. Active &#x60;true&#x60;, disabled &#x60;false&#x60;  | 

## Example

```python
from openapi_client.models.seller_item_status import SellerItemStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SellerItemStatus from a JSON string
seller_item_status_instance = SellerItemStatus.from_json(json)
# print the JSON string representation of the object
print(SellerItemStatus.to_json())

# convert the object into a dict
seller_item_status_dict = seller_item_status_instance.to_dict()
# create an instance of SellerItemStatus from a dict
seller_item_status_from_dict = SellerItemStatus.from_dict(seller_item_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


