# InputCollectionModify


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **str** | Index position for operation (leave blank to specify end of collection) | [optional] 
**input** | **List[str]** | Collection of values or objects to modify | 
**item** | **str** | Item (for multiple items, leave blank and use Items) | [optional] 
**items** | **List[str]** | Items (Collection, for a single item leave blank and use Item) | [optional] 

## Example

```python
from openapi_client.models.input_collection_modify import InputCollectionModify

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionModify from a JSON string
input_collection_modify_instance = InputCollectionModify.from_json(json)
# print the JSON string representation of the object
print(InputCollectionModify.to_json())

# convert the object into a dict
input_collection_modify_dict = input_collection_modify_instance.to_dict()
# create an instance of InputCollectionModify from a dict
input_collection_modify_from_dict = InputCollectionModify.from_dict(input_collection_modify_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


