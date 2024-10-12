# ProductAllOfIconUris

Icons for the gallery items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hero** | **str** | The hero (815x290) icon relative path. | [optional] 
**large** | **str** | The large (115x115) icon relative path. | [optional] 
**medium** | **str** | The medium (90x90) icon relative path. | [optional] 
**small** | **str** | The small (40x40) icon relative path. | [optional] 
**wide** | **str** | The wide (255x115) icon relative path. | [optional] 

## Example

```python
from openapi_client.models.product_all_of_icon_uris import ProductAllOfIconUris

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAllOfIconUris from a JSON string
product_all_of_icon_uris_instance = ProductAllOfIconUris.from_json(json)
# print the JSON string representation of the object
print(ProductAllOfIconUris.to_json())

# convert the object into a dict
product_all_of_icon_uris_dict = product_all_of_icon_uris_instance.to_dict()
# create an instance of ProductAllOfIconUris from a dict
product_all_of_icon_uris_from_dict = ProductAllOfIconUris.from_dict(product_all_of_icon_uris_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


