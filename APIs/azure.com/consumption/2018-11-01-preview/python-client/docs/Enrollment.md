# Enrollment

Current entity level details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle** | **str** | Enrollment billing cycle | [optional] [readonly] 
**channel** | **str** | The channel for Enrollment | [optional] [readonly] 
**country_code** | **str** | The countryCode for Enrollment | [optional] [readonly] 
**currency** | **str** | The currency associated with enrollment | [optional] [readonly] 
**end_date** | **datetime** | Enrollment End Date | [optional] [readonly] 
**language** | **str** | The language for Enrollment | [optional] [readonly] 
**policies** | [**EnrollmentPolicies**](EnrollmentPolicies.md) |  | [optional] 
**start_date** | **datetime** | Enrollment Start Date | [optional] [readonly] 
**status** | **str** | Enrollment status | [optional] [readonly] 

## Example

```python
from openapi_client.models.enrollment import Enrollment

# TODO update the JSON string below
json = "{}"
# create an instance of Enrollment from a JSON string
enrollment_instance = Enrollment.from_json(json)
# print the JSON string representation of the object
print(Enrollment.to_json())

# convert the object into a dict
enrollment_dict = enrollment_instance.to_dict()
# create an instance of Enrollment from a dict
enrollment_from_dict = Enrollment.from_dict(enrollment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


