# Merchants


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant** | [**List[Merchant]**](Merchant.md) |  | [optional] 
**page_offset** | **str** | Zero-based offset where the response will start. The actual start position is this value +1. An offset of 10 starts at item 11. Combined with the PageLength option this allows pagination to be supported through the service requests. | [optional] 
**total_count** | **int** | This is the total number of ATtms that match your criteria. | [optional] 

## Example

```python
from openapi_client.models.merchants import Merchants

# TODO update the JSON string below
json = "{}"
# create an instance of Merchants from a JSON string
merchants_instance = Merchants.from_json(json)
# print the JSON string representation of the object
print(Merchants.to_json())

# convert the object into a dict
merchants_dict = merchants_instance.to_dict()
# create an instance of Merchants from a dict
merchants_from_dict = Merchants.from_dict(merchants_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


