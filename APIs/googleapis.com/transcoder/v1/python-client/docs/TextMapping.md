# TextMapping

The mapping for the JobConfig.edit_list atoms with text EditAtom.inputs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atom_key** | **str** | Required. The EditAtom.key that references atom with text inputs in the JobConfig.edit_list. | [optional] 
**input_key** | **str** | Required. The Input.key that identifies the input file. | [optional] 
**input_track** | **int** | Required. The zero-based index of the track in the input file. | [optional] 

## Example

```python
from openapi_client.models.text_mapping import TextMapping

# TODO update the JSON string below
json = "{}"
# create an instance of TextMapping from a JSON string
text_mapping_instance = TextMapping.from_json(json)
# print the JSON string representation of the object
print(TextMapping.to_json())

# convert the object into a dict
text_mapping_dict = text_mapping_instance.to_dict()
# create an instance of TextMapping from a dict
text_mapping_from_dict = TextMapping.from_dict(text_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


