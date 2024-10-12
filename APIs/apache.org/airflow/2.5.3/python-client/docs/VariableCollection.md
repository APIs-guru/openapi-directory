# VariableCollection

Collection of variables.  *Changed in version 2.1.0*&#58; 'total_entries' field is added. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**variables** | [**List[VariableCollectionItem]**](VariableCollectionItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.variable_collection import VariableCollection

# TODO update the JSON string below
json = "{}"
# create an instance of VariableCollection from a JSON string
variable_collection_instance = VariableCollection.from_json(json)
# print the JSON string representation of the object
print(VariableCollection.to_json())

# convert the object into a dict
variable_collection_dict = variable_collection_instance.to_dict()
# create an instance of VariableCollection from a dict
variable_collection_from_dict = VariableCollection.from_dict(variable_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


