# ListAssetsResponse

A response message from a request to list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[Asset]**](Asset.md) | A list of assets that match the criteria specified in the request. | [optional] 
**next_page_token** | **str** | The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token. | [optional] 
**total_size** | **int** | The total number of assets in the list, without pagination. | [optional] 

## Example

```python
from openapi_client.models.list_assets_response import ListAssetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAssetsResponse from a JSON string
list_assets_response_instance = ListAssetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAssetsResponse.to_json())

# convert the object into a dict
list_assets_response_dict = list_assets_response_instance.to_dict()
# create an instance of ListAssetsResponse from a dict
list_assets_response_from_dict = ListAssetsResponse.from_dict(list_assets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


