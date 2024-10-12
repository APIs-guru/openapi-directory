# SkuInformationList

List of SKU Information objects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Links to the next set of results | [optional] [readonly] 
**value** | [**List[ResourceTypeSku]**](ResourceTypeSku.md) | List of ResourceType Sku | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_information_list import SkuInformationList

# TODO update the JSON string below
json = "{}"
# create an instance of SkuInformationList from a JSON string
sku_information_list_instance = SkuInformationList.from_json(json)
# print the JSON string representation of the object
print(SkuInformationList.to_json())

# convert the object into a dict
sku_information_list_dict = sku_information_list_instance.to_dict()
# create an instance of SkuInformationList from a dict
sku_information_list_from_dict = SkuInformationList.from_dict(sku_information_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


