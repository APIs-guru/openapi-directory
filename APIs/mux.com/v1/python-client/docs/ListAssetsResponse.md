# ListAssetsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Asset]**](Asset.md) |  | [optional] 

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


