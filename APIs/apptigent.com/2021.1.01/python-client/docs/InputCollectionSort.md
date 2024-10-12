# InputCollectionSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **List[str]** | Collection of strings to sort | 
**order** | **str** | Sort order | [default to 'Ascending']

## Example

```python
from openapi_client.models.input_collection_sort import InputCollectionSort

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionSort from a JSON string
input_collection_sort_instance = InputCollectionSort.from_json(json)
# print the JSON string representation of the object
print(InputCollectionSort.to_json())

# convert the object into a dict
input_collection_sort_dict = input_collection_sort_instance.to_dict()
# create an instance of InputCollectionSort from a dict
input_collection_sort_from_dict = InputCollectionSort.from_dict(input_collection_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


