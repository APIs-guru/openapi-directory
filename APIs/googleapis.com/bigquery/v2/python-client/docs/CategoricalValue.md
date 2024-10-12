# CategoricalValue

Representative value of a categorical feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_counts** | [**List[CategoryCount]**](CategoryCount.md) | Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category \&quot;_OTHER_\&quot; and count as aggregate counts of remaining categories. | [optional] 

## Example

```python
from openapi_client.models.categorical_value import CategoricalValue

# TODO update the JSON string below
json = "{}"
# create an instance of CategoricalValue from a JSON string
categorical_value_instance = CategoricalValue.from_json(json)
# print the JSON string representation of the object
print(CategoricalValue.to_json())

# convert the object into a dict
categorical_value_dict = categorical_value_instance.to_dict()
# create an instance of CategoricalValue from a dict
categorical_value_from_dict = CategoricalValue.from_dict(categorical_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


