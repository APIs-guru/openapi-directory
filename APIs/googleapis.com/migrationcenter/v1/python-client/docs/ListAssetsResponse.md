# ListAssetsResponse

Response message for listing assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[Asset]**](Asset.md) | A list of assets. | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

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


