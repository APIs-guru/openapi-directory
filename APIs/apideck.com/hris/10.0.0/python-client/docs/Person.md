# Person


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**birthday** | **date** | Date of birth | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**deceased_on** | **date** | Date of death | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**gender** | [**Gender**](Gender.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**initials** | **str** | Initials of the person | [optional] 
**last_name** | **str** | The last name of the person. | [optional] 
**middle_name** | **str** | Middle name of the person. | [optional] 

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


