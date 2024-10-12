# PatchProductsUuid200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line** | **int** | Line number | [optional] 
**message** | **str** | Message explaining the error | [optional] 
**status_code** | **int** | HTTP status code, see &lt;a href&#x3D;\&quot;/documentation/responses.html#client-errors\&quot;&gt;Client errors&lt;/a&gt; to understand the meaning of each code | [optional] 
**uuid** | **str** | Product uuid | [optional] 

## Example

```python
from openapi_client.models.patch_products_uuid200_response import PatchProductsUuid200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PatchProductsUuid200Response from a JSON string
patch_products_uuid200_response_instance = PatchProductsUuid200Response.from_json(json)
# print the JSON string representation of the object
print(PatchProductsUuid200Response.to_json())

# convert the object into a dict
patch_products_uuid200_response_dict = patch_products_uuid200_response_instance.to_dict()
# create an instance of PatchProductsUuid200Response from a dict
patch_products_uuid200_response_from_dict = PatchProductsUuid200Response.from_dict(patch_products_uuid200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


