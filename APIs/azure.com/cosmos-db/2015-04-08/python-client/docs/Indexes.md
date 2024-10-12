# Indexes

The indexes for the path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The datatype for which the indexing behavior is applied to. | [optional] [default to 'String']
**kind** | **str** | Indicates the type of index. | [optional] [default to 'Hash']
**precision** | **int** | The precision of the index. -1 is maximum precision. | [optional] 

## Example

```python
from openapi_client.models.indexes import Indexes

# TODO update the JSON string below
json = "{}"
# create an instance of Indexes from a JSON string
indexes_instance = Indexes.from_json(json)
# print the JSON string representation of the object
print(Indexes.to_json())

# convert the object into a dict
indexes_dict = indexes_instance.to_dict()
# create an instance of Indexes from a dict
indexes_from_dict = Indexes.from_dict(indexes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


