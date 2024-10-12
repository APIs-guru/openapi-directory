# ValidateCreateMembershipResponse

Response message for the `GkeHub.ValidateCreateMembership` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation_results** | [**List[ValidationResult]**](ValidationResult.md) | Wraps all the validator results. | [optional] 

## Example

```python
from openapi_client.models.validate_create_membership_response import ValidateCreateMembershipResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateCreateMembershipResponse from a JSON string
validate_create_membership_response_instance = ValidateCreateMembershipResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateCreateMembershipResponse.to_json())

# convert the object into a dict
validate_create_membership_response_dict = validate_create_membership_response_instance.to_dict()
# create an instance of ValidateCreateMembershipResponse from a dict
validate_create_membership_response_from_dict = ValidateCreateMembershipResponse.from_dict(validate_create_membership_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


