# Row

A single row in the confusion matrix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_label** | **str** | The original label of this row. | [optional] 
**entries** | [**List[Entry]**](Entry.md) | Info describing predicted label distribution. | [optional] 

## Example

```python
from openapi_client.models.row import Row

# TODO update the JSON string below
json = "{}"
# create an instance of Row from a JSON string
row_instance = Row.from_json(json)
# print the JSON string representation of the object
print(Row.to_json())

# convert the object into a dict
row_dict = row_instance.to_dict()
# create an instance of Row from a dict
row_from_dict = Row.from_dict(row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


