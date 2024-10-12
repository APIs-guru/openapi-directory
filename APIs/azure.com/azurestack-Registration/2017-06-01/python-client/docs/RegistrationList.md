# RegistrationList

Pageable list of registrations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[Registration]**](Registration.md) | List of Registrations | [optional] 

## Example

```python
from openapi_client.models.registration_list import RegistrationList

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationList from a JSON string
registration_list_instance = RegistrationList.from_json(json)
# print the JSON string representation of the object
print(RegistrationList.to_json())

# convert the object into a dict
registration_list_dict = registration_list_instance.to_dict()
# create an instance of RegistrationList from a dict
registration_list_from_dict = RegistrationList.from_dict(registration_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


