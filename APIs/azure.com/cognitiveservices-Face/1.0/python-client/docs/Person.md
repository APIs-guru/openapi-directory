# Person

Person object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persisted_face_ids** | **List[str]** | PersistedFaceIds of registered faces in the person. These persistedFaceIds are returned from Person - Add a Person Face, and will not expire. | [optional] 
**person_id** | **str** | PersonId of the target face list. | 
**name** | **str** | User defined name, maximum length is 128. | [optional] 
**user_data** | **str** | User specified data. Length should not exceed 16KB. | [optional] 

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


