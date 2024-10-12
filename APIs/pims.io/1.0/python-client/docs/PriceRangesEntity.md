# PriceRangesEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique ID of the price range. | 
**ignored** | **bool** | Defines whether this price range is ignored or not. | 
**label** | **str** | Full label of the price range. | 
**last_update_timestamp** | **int** | Timestamp for when the price range was last updated in the customer&#39;s database. | 
**short_label** | **str** | Short label of the price range (generally less than 5 characters). | 

## Example

```python
from openapi_client.models.price_ranges_entity import PriceRangesEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PriceRangesEntity from a JSON string
price_ranges_entity_instance = PriceRangesEntity.from_json(json)
# print the JSON string representation of the object
print(PriceRangesEntity.to_json())

# convert the object into a dict
price_ranges_entity_dict = price_ranges_entity_instance.to_dict()
# create an instance of PriceRangesEntity from a dict
price_ranges_entity_from_dict = PriceRangesEntity.from_dict(price_ranges_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


