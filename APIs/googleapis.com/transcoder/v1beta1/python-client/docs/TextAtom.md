# TextAtom

The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[TextInput]**](TextInput.md) | List of &#x60;Job.inputs&#x60; that should be embedded in this atom. Only one input is supported. | [optional] 
**key** | **str** | Required. The &#x60;EditAtom.key&#x60; that references atom with text inputs in the &#x60;Job.edit_list&#x60;. | [optional] 

## Example

```python
from openapi_client.models.text_atom import TextAtom

# TODO update the JSON string below
json = "{}"
# create an instance of TextAtom from a JSON string
text_atom_instance = TextAtom.from_json(json)
# print the JSON string representation of the object
print(TextAtom.to_json())

# convert the object into a dict
text_atom_dict = text_atom_instance.to_dict()
# create an instance of TextAtom from a dict
text_atom_from_dict = TextAtom.from_dict(text_atom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


