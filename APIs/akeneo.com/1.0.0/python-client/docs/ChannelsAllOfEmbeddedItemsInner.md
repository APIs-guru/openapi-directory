# ChannelsAllOfEmbeddedItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks**](PAMAssetCategoriesAllOfEmbeddedItemsInnerAllOfLinks.md) |  | [optional] 
**category_tree** | **str** | Code of the category tree linked to the channel | 
**code** | **str** | Channel code | 
**conversion_units** | [**ChannelsAllOfEmbeddedItemsInnerAllOfConversionUnits**](ChannelsAllOfEmbeddedItemsInnerAllOfConversionUnits.md) |  | [optional] 
**currencies** | **List[str]** | Codes of activated currencies for the channel | 
**labels** | [**ChannelsAllOfEmbeddedItemsInnerAllOfLabels**](ChannelsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**locales** | **List[str]** | Codes of activated locales for the channel | 

## Example

```python
from openapi_client.models.channels_all_of_embedded_items_inner import ChannelsAllOfEmbeddedItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelsAllOfEmbeddedItemsInner from a JSON string
channels_all_of_embedded_items_inner_instance = ChannelsAllOfEmbeddedItemsInner.from_json(json)
# print the JSON string representation of the object
print(ChannelsAllOfEmbeddedItemsInner.to_json())

# convert the object into a dict
channels_all_of_embedded_items_inner_dict = channels_all_of_embedded_items_inner_instance.to_dict()
# create an instance of ChannelsAllOfEmbeddedItemsInner from a dict
channels_all_of_embedded_items_inner_from_dict = ChannelsAllOfEmbeddedItemsInner.from_dict(channels_all_of_embedded_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


