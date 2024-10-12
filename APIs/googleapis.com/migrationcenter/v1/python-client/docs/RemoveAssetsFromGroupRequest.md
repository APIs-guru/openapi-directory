# RemoveAssetsFromGroupRequest

A request to remove assets from a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_missing** | **bool** | Optional. When this value is set to &#x60;false&#x60; and one of the given assets is not an existing member of the group, the operation fails with a &#x60;Not Found&#x60; error. When set to &#x60;true&#x60; this situation is silently ignored by the server. Default value is &#x60;false&#x60;. | [optional] 
**assets** | [**AssetList**](AssetList.md) |  | [optional] 
**request_id** | **str** | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 

## Example

```python
from openapi_client.models.remove_assets_from_group_request import RemoveAssetsFromGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveAssetsFromGroupRequest from a JSON string
remove_assets_from_group_request_instance = RemoveAssetsFromGroupRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveAssetsFromGroupRequest.to_json())

# convert the object into a dict
remove_assets_from_group_request_dict = remove_assets_from_group_request_instance.to_dict()
# create an instance of RemoveAssetsFromGroupRequest from a dict
remove_assets_from_group_request_from_dict = RemoveAssetsFromGroupRequest.from_dict(remove_assets_from_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


