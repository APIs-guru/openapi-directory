# PostAppCatalogRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Catalog name | 

## Example

```python
from openapi_client.models.post_app_catalog_request import PostAppCatalogRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostAppCatalogRequest from a JSON string
post_app_catalog_request_instance = PostAppCatalogRequest.from_json(json)
# print the JSON string representation of the object
print(PostAppCatalogRequest.to_json())

# convert the object into a dict
post_app_catalog_request_dict = post_app_catalog_request_instance.to_dict()
# create an instance of PostAppCatalogRequest from a dict
post_app_catalog_request_from_dict = PostAppCatalogRequest.from_dict(post_app_catalog_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


