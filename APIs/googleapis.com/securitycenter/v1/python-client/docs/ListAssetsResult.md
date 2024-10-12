# ListAssetsResult

Result containing the Asset and its State.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**Asset**](Asset.md) |  | [optional] 
**state_change** | **str** | State change of the asset between the points in time. | [optional] 

## Example

```python
from openapi_client.models.list_assets_result import ListAssetsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListAssetsResult from a JSON string
list_assets_result_instance = ListAssetsResult.from_json(json)
# print the JSON string representation of the object
print(ListAssetsResult.to_json())

# convert the object into a dict
list_assets_result_dict = list_assets_result_instance.to_dict()
# create an instance of ListAssetsResult from a dict
list_assets_result_from_dict = ListAssetsResult.from_dict(list_assets_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


