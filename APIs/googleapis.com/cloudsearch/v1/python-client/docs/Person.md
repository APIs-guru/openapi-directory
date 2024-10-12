# Person

Object to represent a person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_addresses** | [**List[EmailAddress]**](EmailAddress.md) | The person&#39;s email addresses | [optional] 
**name** | **str** | The resource name of the person to provide information about. See [&#x60;People.get&#x60;](https://developers.google.com/people/api/rest/v1/people/get) from the Google People API. | [optional] 
**obfuscated_id** | **str** | Obfuscated ID of a person. | [optional] 
**person_names** | [**List[Name]**](Name.md) | The person&#39;s name | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) | The person&#39;s phone numbers | [optional] 
**photos** | [**List[Photo]**](Photo.md) | A person&#39;s read-only photo. A picture shown next to the person&#39;s name to help others recognize the person in search results. | [optional] 

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


