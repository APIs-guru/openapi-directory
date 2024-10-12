# EnrollmentAccount

An enrollment account resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnrollmentAccountProperties**](EnrollmentAccountProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.enrollment_account import EnrollmentAccount

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollmentAccount from a JSON string
enrollment_account_instance = EnrollmentAccount.from_json(json)
# print the JSON string representation of the object
print(EnrollmentAccount.to_json())

# convert the object into a dict
enrollment_account_dict = enrollment_account_instance.to_dict()
# create an instance of EnrollmentAccount from a dict
enrollment_account_from_dict = EnrollmentAccount.from_dict(enrollment_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


