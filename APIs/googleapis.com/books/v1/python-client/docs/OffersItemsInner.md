# OffersItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**art_url** | **str** |  | [optional] 
**gservices_key** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**items** | [**List[OffersItemsInnerItemsInner]**](OffersItemsInnerItemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.offers_items_inner import OffersItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OffersItemsInner from a JSON string
offers_items_inner_instance = OffersItemsInner.from_json(json)
# print the JSON string representation of the object
print(OffersItemsInner.to_json())

# convert the object into a dict
offers_items_inner_dict = offers_items_inner_instance.to_dict()
# create an instance of OffersItemsInner from a dict
offers_items_inner_from_dict = OffersItemsInner.from_dict(offers_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


