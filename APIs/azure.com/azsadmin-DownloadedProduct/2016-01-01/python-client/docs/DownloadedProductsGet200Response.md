# DownloadedProductsGet200Response

Downloaded product resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DownloadedProductsGet200ResponseProperties**](DownloadedProductsGet200ResponseProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.downloaded_products_get200_response import DownloadedProductsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadedProductsGet200Response from a JSON string
downloaded_products_get200_response_instance = DownloadedProductsGet200Response.from_json(json)
# print the JSON string representation of the object
print(DownloadedProductsGet200Response.to_json())

# convert the object into a dict
downloaded_products_get200_response_dict = downloaded_products_get200_response_instance.to_dict()
# create an instance of DownloadedProductsGet200Response from a dict
downloaded_products_get200_response_from_dict = DownloadedProductsGet200Response.from_dict(downloaded_products_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


