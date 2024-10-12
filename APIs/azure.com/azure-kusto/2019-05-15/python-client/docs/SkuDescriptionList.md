# SkuDescriptionList

The list of the EngagementFabric SKU descriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SkuDescription]**](SkuDescription.md) | SKU descriptions | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_description_list import SkuDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of SkuDescriptionList from a JSON string
sku_description_list_instance = SkuDescriptionList.from_json(json)
# print the JSON string representation of the object
print(SkuDescriptionList.to_json())

# convert the object into a dict
sku_description_list_dict = sku_description_list_instance.to_dict()
# create an instance of SkuDescriptionList from a dict
sku_description_list_from_dict = SkuDescriptionList.from_dict(sku_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


