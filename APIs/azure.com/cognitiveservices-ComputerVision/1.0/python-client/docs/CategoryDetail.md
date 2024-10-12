# CategoryDetail

An object describing additional category details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**celebrities** | [**List[CelebritiesModel]**](CelebritiesModel.md) | An array of celebrities if any identified. | [optional] 

## Example

```python
from openapi_client.models.category_detail import CategoryDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryDetail from a JSON string
category_detail_instance = CategoryDetail.from_json(json)
# print the JSON string representation of the object
print(CategoryDetail.to_json())

# convert the object into a dict
category_detail_dict = category_detail_instance.to_dict()
# create an instance of CategoryDetail from a dict
category_detail_from_dict = CategoryDetail.from_dict(category_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


