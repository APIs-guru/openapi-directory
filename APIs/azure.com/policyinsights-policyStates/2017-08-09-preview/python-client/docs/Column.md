# Column

Column definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Data type of the column. | [optional] 
**name** | **str** | Name of the column. | [optional] 
**ordinal** | **int** | Ordinal value of the column in a record. | [optional] 

## Example

```python
from openapi_client.models.column import Column

# TODO update the JSON string below
json = "{}"
# create an instance of Column from a JSON string
column_instance = Column.from_json(json)
# print the JSON string representation of the object
print(Column.to_json())

# convert the object into a dict
column_dict = column_instance.to_dict()
# create an instance of Column from a dict
column_from_dict = Column.from_dict(column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


