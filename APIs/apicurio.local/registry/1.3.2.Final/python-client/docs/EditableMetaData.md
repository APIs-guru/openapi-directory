# EditableMetaData



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**labels** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**properties** | **Dict[str, str]** | User-defined name-value pairs. Name and value must be strings. | [optional] 

## Example

```python
from openapi_client.models.editable_meta_data import EditableMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of EditableMetaData from a JSON string
editable_meta_data_instance = EditableMetaData.from_json(json)
# print the JSON string representation of the object
print(EditableMetaData.to_json())

# convert the object into a dict
editable_meta_data_dict = editable_meta_data_instance.to_dict()
# create an instance of EditableMetaData from a dict
editable_meta_data_from_dict = EditableMetaData.from_dict(editable_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


