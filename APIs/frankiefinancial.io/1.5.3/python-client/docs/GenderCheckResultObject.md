# GenderCheckResultObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_result** | [**List[GeneralCheckResultObject]**](GeneralCheckResultObject.md) | An array in reverse chronological order of all checks done on this data point for the given entity. Older checks may have been previously done by you or another institution, and if so, these will be listed. | [optional] 
**gender** | [**EnumGender**](EnumGender.md) |  | [optional] 

## Example

```python
from openapi_client.models.gender_check_result_object import GenderCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of GenderCheckResultObject from a JSON string
gender_check_result_object_instance = GenderCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(GenderCheckResultObject.to_json())

# convert the object into a dict
gender_check_result_object_dict = gender_check_result_object_instance.to_dict()
# create an instance of GenderCheckResultObject from a dict
gender_check_result_object_from_dict = GenderCheckResultObject.from_dict(gender_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


