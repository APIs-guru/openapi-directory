# InputCollectionSplit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **str** | Index location to split (leave empty to use Match value) | [optional] 
**input** | **List[str]** | Collection of items to split | 
**match** | **str** | String to match (explicit, case-insensitive, leave empty to use Index) | [optional] 

## Example

```python
from openapi_client.models.input_collection_split import InputCollectionSplit

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionSplit from a JSON string
input_collection_split_instance = InputCollectionSplit.from_json(json)
# print the JSON string representation of the object
print(InputCollectionSplit.to_json())

# convert the object into a dict
input_collection_split_dict = input_collection_split_instance.to_dict()
# create an instance of InputCollectionSplit from a dict
input_collection_split_from_dict = InputCollectionSplit.from_dict(input_collection_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


