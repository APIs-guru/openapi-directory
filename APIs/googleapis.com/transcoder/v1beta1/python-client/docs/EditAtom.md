# EditAtom

Edit atom.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_offset** | **str** | End time in seconds for the atom, relative to the input file timeline. When &#x60;end_time_offset&#x60; is not specified, the &#x60;inputs&#x60; are used until the end of the atom. | [optional] 
**inputs** | **List[str]** | List of &#x60;Input.key&#x60;s identifying files that should be used in this atom. The listed &#x60;inputs&#x60; must have the same timeline. | [optional] 
**key** | **str** | A unique key for this atom. Must be specified when using advanced mapping. | [optional] 
**start_time_offset** | **str** | Start time in seconds for the atom, relative to the input file timeline. The default is &#x60;0s&#x60;. | [optional] 

## Example

```python
from openapi_client.models.edit_atom import EditAtom

# TODO update the JSON string below
json = "{}"
# create an instance of EditAtom from a JSON string
edit_atom_instance = EditAtom.from_json(json)
# print the JSON string representation of the object
print(EditAtom.to_json())

# convert the object into a dict
edit_atom_dict = edit_atom_instance.to_dict()
# create an instance of EditAtom from a dict
edit_atom_from_dict = EditAtom.from_dict(edit_atom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


