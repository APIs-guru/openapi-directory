# ListUserAssetsResponse

A response message from a request to list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token. | [optional] 
**total_size** | **int** | The total number of assets in the list, without pagination. | [optional] 
**user_assets** | [**List[UserAsset]**](UserAsset.md) | A list of UserAssets matching the request. | [optional] 

## Example

```python
from openapi_client.models.list_user_assets_response import ListUserAssetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserAssetsResponse from a JSON string
list_user_assets_response_instance = ListUserAssetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUserAssetsResponse.to_json())

# convert the object into a dict
list_user_assets_response_dict = list_user_assets_response_instance.to_dict()
# create an instance of ListUserAssetsResponse from a dict
list_user_assets_response_from_dict = ListUserAssetsResponse.from_dict(list_user_assets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


