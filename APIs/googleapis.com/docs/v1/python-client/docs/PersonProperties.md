# PersonProperties

Properties specific to a linked Person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Output only. The email address linked to this Person. This field is always present. | [optional] [readonly] 
**name** | **str** | Output only. The name of the person if it&#39;s displayed in the link text instead of the person&#39;s email address. | [optional] [readonly] 

## Example

```python
from openapi_client.models.person_properties import PersonProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PersonProperties from a JSON string
person_properties_instance = PersonProperties.from_json(json)
# print the JSON string representation of the object
print(PersonProperties.to_json())

# convert the object into a dict
person_properties_dict = person_properties_instance.to_dict()
# create an instance of PersonProperties from a dict
person_properties_from_dict = PersonProperties.from_dict(person_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


