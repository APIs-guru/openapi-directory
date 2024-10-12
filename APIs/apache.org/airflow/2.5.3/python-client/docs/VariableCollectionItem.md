# VariableCollectionItem

XCom entry collection item. The value field are only available when retrieving a single object due to the sensitivity of this data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the variable.  *New in version 2.4.0*  | [optional] 
**key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.variable_collection_item import VariableCollectionItem

# TODO update the JSON string below
json = "{}"
# create an instance of VariableCollectionItem from a JSON string
variable_collection_item_instance = VariableCollectionItem.from_json(json)
# print the JSON string representation of the object
print(VariableCollectionItem.to_json())

# convert the object into a dict
variable_collection_item_dict = variable_collection_item_instance.to_dict()
# create an instance of VariableCollectionItem from a dict
variable_collection_item_from_dict = VariableCollectionItem.from_dict(variable_collection_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


