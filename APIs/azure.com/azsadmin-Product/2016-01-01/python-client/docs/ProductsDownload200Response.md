# ProductsDownload200Response

Downloaded product resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductsDownload200ResponseProperties**](ProductsDownload200ResponseProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.products_download200_response import ProductsDownload200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsDownload200Response from a JSON string
products_download200_response_instance = ProductsDownload200Response.from_json(json)
# print the JSON string representation of the object
print(ProductsDownload200Response.to_json())

# convert the object into a dict
products_download200_response_dict = products_download200_response_instance.to_dict()
# create an instance of ProductsDownload200Response from a dict
products_download200_response_from_dict = ProductsDownload200Response.from_dict(products_download200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


