# Person

A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person_id** | **str** | Output only. The unique ID of this link. | [optional] [readonly] 
**person_properties** | [**PersonProperties**](PersonProperties.md) |  | [optional] 
**suggested_deletion_ids** | **List[str]** | IDs for suggestions that remove this person link from the document. A Person might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn&#39;t suggested for deletion. | [optional] 
**suggested_insertion_ids** | **List[str]** | IDs for suggestions that insert this person link into the document. A Person might have multiple insertion IDs if it&#39;s a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn&#39;t a suggested insertion. | [optional] 
**suggested_text_style_changes** | [**Dict[str, SuggestedTextStyle]**](SuggestedTextStyle.md) | The suggested text style changes to this Person, keyed by suggestion ID. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.person import Person

# TODO update the JSON string below
json = "{}"
# create an instance of Person from a JSON string
person_instance = Person.from_json(json)
# print the JSON string representation of the object
print(Person.to_json())

# convert the object into a dict
person_dict = person_instance.to_dict()
# create an instance of Person from a dict
person_from_dict = Person.from_dict(person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


