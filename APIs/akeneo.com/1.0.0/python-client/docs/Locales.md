# Locales


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfLinks**](PAMAssetCategoriesAllOfLinks.md) |  | [optional] 
**current_page** | **int** | Current page number | [optional] 
**embedded** | [**LocalesAllOfEmbedded**](LocalesAllOfEmbedded.md) |  | [optional] 

## Example

```python
from openapi_client.models.locales import Locales

# TODO update the JSON string below
json = "{}"
# create an instance of Locales from a JSON string
locales_instance = Locales.from_json(json)
# print the JSON string representation of the object
print(Locales.to_json())

# convert the object into a dict
locales_dict = locales_instance.to_dict()
# create an instance of Locales from a dict
locales_from_dict = Locales.from_dict(locales_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


