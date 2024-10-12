# DOBObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | ISO-3166-1 code for the country of birth. You must use the alpha3 country code (e.g. AUS, USA, IDR, KOR, etc) We&#39;ll convert as needed.  See https://en.wikipedia.org/wiki/ISO_3166-1  | [optional] 
**date_of_birth** | **date** | Date of Birth in YYYY-MM-DD format | [optional] 
**locality** | **str** | Place of birth other than country If locality is given, then country must also be provided.  | [optional] 
**year_of_birth** | **str** | Year of birth or \&quot;unknown\&quot;. This will be autoextracted if dateOfBirth is supplied. | [optional] 

## Example

```python
from openapi_client.models.dob_object import DOBObject

# TODO update the JSON string below
json = "{}"
# create an instance of DOBObject from a JSON string
dob_object_instance = DOBObject.from_json(json)
# print the JSON string representation of the object
print(DOBObject.to_json())

# convert the object into a dict
dob_object_dict = dob_object_instance.to_dict()
# create an instance of DOBObject from a dict
dob_object_from_dict = DOBObject.from_dict(dob_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


