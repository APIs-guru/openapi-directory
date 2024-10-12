# PostAppCatalog201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the catalog is enabled or not | [optional] [default to False]
**id** | **str** | Catalog id | [optional] 
**name** | **str** | Catalog name | [optional] 

## Example

```python
from openapi_client.models.post_app_catalog201_response import PostAppCatalog201Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostAppCatalog201Response from a JSON string
post_app_catalog201_response_instance = PostAppCatalog201Response.from_json(json)
# print the JSON string representation of the object
print(PostAppCatalog201Response.to_json())

# convert the object into a dict
post_app_catalog201_response_dict = post_app_catalog201_response_instance.to_dict()
# create an instance of PostAppCatalog201Response from a dict
post_app_catalog201_response_from_dict = PostAppCatalog201Response.from_dict(post_app_catalog201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


