# StoreLayoutPagesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**List[StorePage]**](StorePage.md) | A store page of an enterprise. | [optional] 

## Example

```python
from openapi_client.models.store_layout_pages_list_response import StoreLayoutPagesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StoreLayoutPagesListResponse from a JSON string
store_layout_pages_list_response_instance = StoreLayoutPagesListResponse.from_json(json)
# print the JSON string representation of the object
print(StoreLayoutPagesListResponse.to_json())

# convert the object into a dict
store_layout_pages_list_response_dict = store_layout_pages_list_response_instance.to_dict()
# create an instance of StoreLayoutPagesListResponse from a dict
store_layout_pages_list_response_from_dict = StoreLayoutPagesListResponse.from_dict(store_layout_pages_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


