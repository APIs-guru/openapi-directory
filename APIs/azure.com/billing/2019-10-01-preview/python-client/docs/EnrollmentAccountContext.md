# EnrollmentAccountContext

The rating context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_center** | **str** | The cost center name. | [optional] 
**end_date** | **datetime** | Account End Date | [optional] 
**enrollment_account_name** | **str** | The enrollment account id. | [optional] 
**start_date** | **datetime** | Account Start Date | [optional] 

## Example

```python
from openapi_client.models.enrollment_account_context import EnrollmentAccountContext

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollmentAccountContext from a JSON string
enrollment_account_context_instance = EnrollmentAccountContext.from_json(json)
# print the JSON string representation of the object
print(EnrollmentAccountContext.to_json())

# convert the object into a dict
enrollment_account_context_dict = enrollment_account_context_instance.to_dict()
# create an instance of EnrollmentAccountContext from a dict
enrollment_account_context_from_dict = EnrollmentAccountContext.from_dict(enrollment_account_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


