# EnrollmentAccountListResult

Result of listing enrollment accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[EnrollmentAccount]**](EnrollmentAccount.md) | The list of enrollment accounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.enrollment_account_list_result import EnrollmentAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollmentAccountListResult from a JSON string
enrollment_account_list_result_instance = EnrollmentAccountListResult.from_json(json)
# print the JSON string representation of the object
print(EnrollmentAccountListResult.to_json())

# convert the object into a dict
enrollment_account_list_result_dict = enrollment_account_list_result_instance.to_dict()
# create an instance of EnrollmentAccountListResult from a dict
enrollment_account_list_result_from_dict = EnrollmentAccountListResult.from_dict(enrollment_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


