# DOBCheckResultObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_result** | [**List[GeneralCheckResultObject]**](GeneralCheckResultObject.md) | An array in reverse chronological order of all checks done on this data point for the given entity. Older checks may have been previously done by you or another institution, and if so, these will be listed. | [optional] 
**dob** | [**DOBObject**](DOBObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.dob_check_result_object import DOBCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DOBCheckResultObject from a JSON string
dob_check_result_object_instance = DOBCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(DOBCheckResultObject.to_json())

# convert the object into a dict
dob_check_result_object_dict = dob_check_result_object_instance.to_dict()
# create an instance of DOBCheckResultObject from a dict
dob_check_result_object_from_dict = DOBCheckResultObject.from_dict(dob_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


