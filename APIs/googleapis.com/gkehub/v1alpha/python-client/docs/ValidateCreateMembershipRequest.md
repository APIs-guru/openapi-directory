# ValidateCreateMembershipRequest

Request message for the `GkeHub.ValidateCreateMembership` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership** | [**Membership**](Membership.md) |  | [optional] 
**membership_id** | **str** | Required. Client chosen membership id. | [optional] 

## Example

```python
from openapi_client.models.validate_create_membership_request import ValidateCreateMembershipRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateCreateMembershipRequest from a JSON string
validate_create_membership_request_instance = ValidateCreateMembershipRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateCreateMembershipRequest.to_json())

# convert the object into a dict
validate_create_membership_request_dict = validate_create_membership_request_instance.to_dict()
# create an instance of ValidateCreateMembershipRequest from a dict
validate_create_membership_request_from_dict = ValidateCreateMembershipRequest.from_dict(validate_create_membership_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


