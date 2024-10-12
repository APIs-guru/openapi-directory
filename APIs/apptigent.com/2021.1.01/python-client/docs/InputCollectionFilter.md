# InputCollectionFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **List[str]** | Collection of strings to filter | 
**keywords** | **str** | Keywords (separate multiple values with commas) | 
**match** | **str** | Match type | [default to 'Any']

## Example

```python
from openapi_client.models.input_collection_filter import InputCollectionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionFilter from a JSON string
input_collection_filter_instance = InputCollectionFilter.from_json(json)
# print the JSON string representation of the object
print(InputCollectionFilter.to_json())

# convert the object into a dict
input_collection_filter_dict = input_collection_filter_instance.to_dict()
# create an instance of InputCollectionFilter from a dict
input_collection_filter_from_dict = InputCollectionFilter.from_dict(input_collection_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


