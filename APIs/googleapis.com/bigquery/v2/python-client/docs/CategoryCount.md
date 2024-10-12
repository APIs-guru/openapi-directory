# CategoryCount

Represents the count of a single category within the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The name of category. | [optional] 
**count** | **str** | The count of training samples matching the category within the cluster. | [optional] 

## Example

```python
from openapi_client.models.category_count import CategoryCount

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryCount from a JSON string
category_count_instance = CategoryCount.from_json(json)
# print the JSON string representation of the object
print(CategoryCount.to_json())

# convert the object into a dict
category_count_dict = category_count_instance.to_dict()
# create an instance of CategoryCount from a dict
category_count_from_dict = CategoryCount.from_dict(category_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


