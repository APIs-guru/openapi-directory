# DownloadedProductAllOfIconUris

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
from openapi_client.models.downloaded_product_all_of_icon_uris import DownloadedProductAllOfIconUris

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadedProductAllOfIconUris from a JSON string
downloaded_product_all_of_icon_uris_instance = DownloadedProductAllOfIconUris.from_json(json)
# print the JSON string representation of the object
print(DownloadedProductAllOfIconUris.to_json())

# convert the object into a dict
downloaded_product_all_of_icon_uris_dict = downloaded_product_all_of_icon_uris_instance.to_dict()
# create an instance of DownloadedProductAllOfIconUris from a dict
downloaded_product_all_of_icon_uris_from_dict = DownloadedProductAllOfIconUris.from_dict(downloaded_product_all_of_icon_uris_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


