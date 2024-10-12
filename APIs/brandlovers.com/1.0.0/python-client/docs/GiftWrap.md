# GiftWrap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | Flag that defines if this product is eligible for giftwrapping | 
**message_support** | **bool** | Flag that defines if seller supports giftwrapp with a message | [optional] 
**value** | **int** | Amount charged for gift wrap. All prices must be provided in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. $1,2345.67 should be informed solely as 1234567 | 

## Example

```python
from openapi_client.models.gift_wrap import GiftWrap

# TODO update the JSON string below
json = "{}"
# create an instance of GiftWrap from a JSON string
gift_wrap_instance = GiftWrap.from_json(json)
# print the JSON string representation of the object
print(GiftWrap.to_json())

# convert the object into a dict
gift_wrap_dict = gift_wrap_instance.to_dict()
# create an instance of GiftWrap from a dict
gift_wrap_from_dict = GiftWrap.from_dict(gift_wrap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


