# BooksCloudloadingResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] 
**processing_state** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**volume_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.books_cloudloading_resource import BooksCloudloadingResource

# TODO update the JSON string below
json = "{}"
# create an instance of BooksCloudloadingResource from a JSON string
books_cloudloading_resource_instance = BooksCloudloadingResource.from_json(json)
# print the JSON string representation of the object
print(BooksCloudloadingResource.to_json())

# convert the object into a dict
books_cloudloading_resource_dict = books_cloudloading_resource_instance.to_dict()
# create an instance of BooksCloudloadingResource from a dict
books_cloudloading_resource_from_dict = BooksCloudloadingResource.from_dict(books_cloudloading_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


