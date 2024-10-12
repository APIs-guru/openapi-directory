# InputCollectionReplace


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_case** | **str** | Ignore case | [default to 'true']
**input** | **List[str]** | Collection of strings | 
**match** | **str** | Match value | 
**replacement** | **str** | Replacement value | 

## Example

```python
from openapi_client.models.input_collection_replace import InputCollectionReplace

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionReplace from a JSON string
input_collection_replace_instance = InputCollectionReplace.from_json(json)
# print the JSON string representation of the object
print(InputCollectionReplace.to_json())

# convert the object into a dict
input_collection_replace_dict = input_collection_replace_instance.to_dict()
# create an instance of InputCollectionReplace from a dict
input_collection_replace_from_dict = InputCollectionReplace.from_dict(input_collection_replace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


