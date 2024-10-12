# PersonalNameCheckResultObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_result** | [**List[GeneralCheckResultObject]**](GeneralCheckResultObject.md) | An array in reverse chronological order of all checks done on this data point for the given entity. Older checks may have been previously done by you or another institution, and if so, these will be listed. | [optional] 
**name** | [**PersonalNameObject**](PersonalNameObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.personal_name_check_result_object import PersonalNameCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameCheckResultObject from a JSON string
personal_name_check_result_object_instance = PersonalNameCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(PersonalNameCheckResultObject.to_json())

# convert the object into a dict
personal_name_check_result_object_dict = personal_name_check_result_object_instance.to_dict()
# create an instance of PersonalNameCheckResultObject from a dict
personal_name_check_result_object_from_dict = PersonalNameCheckResultObject.from_dict(personal_name_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


