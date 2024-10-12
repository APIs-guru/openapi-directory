# Products2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PAMAssetCategoriesAllOfLinks**](PAMAssetCategoriesAllOfLinks.md) |  | [optional] 
**current_page** | **int** | Current page number | [optional] 
**embedded** | [**Products2AllOfEmbedded**](Products2AllOfEmbedded.md) |  | [optional] 

## Example

```python
from openapi_client.models.products2 import Products2

# TODO update the JSON string below
json = "{}"
# create an instance of Products2 from a JSON string
products2_instance = Products2.from_json(json)
# print the JSON string representation of the object
print(Products2.to_json())

# convert the object into a dict
products2_dict = products2_instance.to_dict()
# create an instance of Products2 from a dict
products2_from_dict = Products2.from_dict(products2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


