# DepartmentProperties

The properties of the department.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_center** | **str** | The cost center name. | [optional] 
**department_name** | **str** | The name for department. | [optional] 
**enrollment_accounts** | [**List[EnrollmentAccount]**](EnrollmentAccount.md) | Associated enrollment accounts. By default this is not populated, unless it&#39;s specified in $expand. | [optional] 
**status** | **str** | The status for department. | [optional] 

## Example

```python
from openapi_client.models.department_properties import DepartmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DepartmentProperties from a JSON string
department_properties_instance = DepartmentProperties.from_json(json)
# print the JSON string representation of the object
print(DepartmentProperties.to_json())

# convert the object into a dict
department_properties_dict = department_properties_instance.to_dict()
# create an instance of DepartmentProperties from a dict
department_properties_from_dict = DepartmentProperties.from_dict(department_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


