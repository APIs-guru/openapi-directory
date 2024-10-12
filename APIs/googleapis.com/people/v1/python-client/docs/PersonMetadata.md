# PersonMetadata

The metadata about a person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | Output only. True if the person resource has been deleted. Populated only for &#x60;people.connections.list&#x60; and &#x60;otherContacts.list&#x60; sync requests. | [optional] [readonly] 
**linked_people_resource_names** | **List[str]** | Output only. Resource names of people linked to this resource. | [optional] [readonly] 
**object_type** | **str** | Output only. **DEPRECATED** (Please use &#x60;person.metadata.sources.profileMetadata.objectType&#x60; instead) The type of the person object. | [optional] [readonly] 
**previous_resource_names** | **List[str]** | Output only. Any former resource names this person has had. Populated only for &#x60;people.connections.list&#x60; requests that include a sync token. The resource name may change when adding or removing fields that link a contact and profile such as a verified email, verified phone number, or profile URL. | [optional] [readonly] 
**sources** | [**List[Source]**](Source.md) | The sources of data for the person. | [optional] 

## Example

```python
from openapi_client.models.person_metadata import PersonMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PersonMetadata from a JSON string
person_metadata_instance = PersonMetadata.from_json(json)
# print the JSON string representation of the object
print(PersonMetadata.to_json())

# convert the object into a dict
person_metadata_dict = person_metadata_instance.to_dict()
# create an instance of PersonMetadata from a dict
person_metadata_from_dict = PersonMetadata.from_dict(person_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


