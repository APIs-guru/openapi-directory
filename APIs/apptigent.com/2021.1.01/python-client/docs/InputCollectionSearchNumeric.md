# InputCollectionSearchNumeric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **List[float]** | Collection of strings to search | 
**match** | **float** | Number to match | 
**type** | **str** | Type of number - integer or decimal | [optional] [default to 'Integer']

## Example

```python
from openapi_client.models.input_collection_search_numeric import InputCollectionSearchNumeric

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionSearchNumeric from a JSON string
input_collection_search_numeric_instance = InputCollectionSearchNumeric.from_json(json)
# print the JSON string representation of the object
print(InputCollectionSearchNumeric.to_json())

# convert the object into a dict
input_collection_search_numeric_dict = input_collection_search_numeric_instance.to_dict()
# create an instance of InputCollectionSearchNumeric from a dict
input_collection_search_numeric_from_dict = InputCollectionSearchNumeric.from_dict(input_collection_search_numeric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


