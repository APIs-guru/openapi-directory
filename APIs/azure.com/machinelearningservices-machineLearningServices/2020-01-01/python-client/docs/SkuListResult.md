# SkuListResult

List of skus with features

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of Workspace Skus. Call ListNext() with this URI to fetch the next page of Workspace Skus | [optional] 
**value** | [**List[WorkspaceSku]**](WorkspaceSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.sku_list_result import SkuListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SkuListResult from a JSON string
sku_list_result_instance = SkuListResult.from_json(json)
# print the JSON string representation of the object
print(SkuListResult.to_json())

# convert the object into a dict
sku_list_result_dict = sku_list_result_instance.to_dict()
# create an instance of SkuListResult from a dict
sku_list_result_from_dict = SkuListResult.from_dict(sku_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


