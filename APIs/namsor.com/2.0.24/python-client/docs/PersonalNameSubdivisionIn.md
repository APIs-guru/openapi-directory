# PersonalNameSubdivisionIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**subdivision_iso** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.personal_name_subdivision_in import PersonalNameSubdivisionIn

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameSubdivisionIn from a JSON string
personal_name_subdivision_in_instance = PersonalNameSubdivisionIn.from_json(json)
# print the JSON string representation of the object
print(PersonalNameSubdivisionIn.to_json())

# convert the object into a dict
personal_name_subdivision_in_dict = personal_name_subdivision_in_instance.to_dict()
# create an instance of PersonalNameSubdivisionIn from a dict
personal_name_subdivision_in_from_dict = PersonalNameSubdivisionIn.from_dict(personal_name_subdivision_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


