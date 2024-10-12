# DownloadedProductResource

Downloaded product resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DownloadedProduct**](DownloadedProduct.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.downloaded_product_resource import DownloadedProductResource

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadedProductResource from a JSON string
downloaded_product_resource_instance = DownloadedProductResource.from_json(json)
# print the JSON string representation of the object
print(DownloadedProductResource.to_json())

# convert the object into a dict
downloaded_product_resource_dict = downloaded_product_resource_instance.to_dict()
# create an instance of DownloadedProductResource from a dict
downloaded_product_resource_from_dict = DownloadedProductResource.from_dict(downloaded_product_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


