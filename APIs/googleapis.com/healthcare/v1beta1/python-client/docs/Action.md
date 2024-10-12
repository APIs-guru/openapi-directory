# Action

Specifies a selection of tags and an `Action` to apply to each one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clean_image_tag** | [**ImageConfig**](ImageConfig.md) |  | [optional] 
**clean_text_tag** | **object** | Inspect text and transform sensitive text. Configurable using TextConfig. Supported [Value Representations] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): AE, LO, LT, PN, SH, ST, UC, UT, DA, DT, AS | [optional] 
**delete_tag** | **object** | Delete tag. | [optional] 
**keep_tag** | **object** | Keep tag unchanged. | [optional] 
**queries** | **List[str]** | Select all tags with the listed tag IDs, names, or Value Representations (VRs). Examples: ID: \&quot;00100010\&quot; Keyword: \&quot;PatientName\&quot; VR: \&quot;PN\&quot; | [optional] 
**recurse_tag** | **object** | Recursively apply DICOM de-id to tags nested in a sequence. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): SQ | [optional] 
**regen_uid_tag** | **object** | Replace UID with a new generated UID. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): UI | [optional] 
**remove_tag** | **object** | Replace with empty tag. | [optional] 
**reset_tag** | **object** | Reset tag to a placeholder value. | [optional] 

## Example

```python
from openapi_client.models.action import Action

# TODO update the JSON string below
json = "{}"
# create an instance of Action from a JSON string
action_instance = Action.from_json(json)
# print the JSON string representation of the object
print(Action.to_json())

# convert the object into a dict
action_dict = action_instance.to_dict()
# create an instance of Action from a dict
action_from_dict = Action.from_dict(action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


