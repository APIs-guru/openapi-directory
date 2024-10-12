# SolutionsCollection

Collection of solutions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the value of next link. | [optional] 
**value** | [**List[Solution]**](Solution.md) | Gets or sets the list of solutions. | [optional] 

## Example

```python
from openapi_client.models.solutions_collection import SolutionsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionsCollection from a JSON string
solutions_collection_instance = SolutionsCollection.from_json(json)
# print the JSON string representation of the object
print(SolutionsCollection.to_json())

# convert the object into a dict
solutions_collection_dict = solutions_collection_instance.to_dict()
# create an instance of SolutionsCollection from a dict
solutions_collection_from_dict = SolutionsCollection.from_dict(solutions_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


