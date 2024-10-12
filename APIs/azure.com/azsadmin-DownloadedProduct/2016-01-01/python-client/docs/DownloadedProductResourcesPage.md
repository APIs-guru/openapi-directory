# DownloadedProductResourcesPage

Holds an array of downloaded products and the URI to the next page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[DownloadedProductResourcesPageValueInner]**](DownloadedProductResourcesPageValueInner.md) | Array of downloaded products. | [optional] 

## Example

```python
from openapi_client.models.downloaded_product_resources_page import DownloadedProductResourcesPage

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadedProductResourcesPage from a JSON string
downloaded_product_resources_page_instance = DownloadedProductResourcesPage.from_json(json)
# print the JSON string representation of the object
print(DownloadedProductResourcesPage.to_json())

# convert the object into a dict
downloaded_product_resources_page_dict = downloaded_product_resources_page_instance.to_dict()
# create an instance of DownloadedProductResourcesPage from a dict
downloaded_product_resources_page_from_dict = DownloadedProductResourcesPage.from_dict(downloaded_product_resources_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


