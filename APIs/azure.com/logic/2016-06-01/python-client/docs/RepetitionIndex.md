# RepetitionIndex

The workflow run action repetition index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_index** | **int** | The index. | 
**scope_name** | **str** | The scope. | [optional] 

## Example

```python
from openapi_client.models.repetition_index import RepetitionIndex

# TODO update the JSON string below
json = "{}"
# create an instance of RepetitionIndex from a JSON string
repetition_index_instance = RepetitionIndex.from_json(json)
# print the JSON string representation of the object
print(RepetitionIndex.to_json())

# convert the object into a dict
repetition_index_dict = repetition_index_instance.to_dict()
# create an instance of RepetitionIndex from a dict
repetition_index_from_dict = RepetitionIndex.from_dict(repetition_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


