# EnrollmentAccountProperties

The properties of the enrollment account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_name** | **str** | The account owner&#39;s principal name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.enrollment_account_properties import EnrollmentAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollmentAccountProperties from a JSON string
enrollment_account_properties_instance = EnrollmentAccountProperties.from_json(json)
# print the JSON string representation of the object
print(EnrollmentAccountProperties.to_json())

# convert the object into a dict
enrollment_account_properties_dict = enrollment_account_properties_instance.to_dict()
# create an instance of EnrollmentAccountProperties from a dict
enrollment_account_properties_from_dict = EnrollmentAccountProperties.from_dict(enrollment_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


