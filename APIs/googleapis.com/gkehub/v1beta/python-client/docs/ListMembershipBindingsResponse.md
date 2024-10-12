# ListMembershipBindingsResponse

List of MembershipBindings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership_bindings** | [**List[MembershipBinding]**](MembershipBinding.md) | The list of membership_bindings | [optional] 
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListMembershipBindings&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 

## Example

```python
from openapi_client.models.list_membership_bindings_response import ListMembershipBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMembershipBindingsResponse from a JSON string
list_membership_bindings_response_instance = ListMembershipBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMembershipBindingsResponse.to_json())

# convert the object into a dict
list_membership_bindings_response_dict = list_membership_bindings_response_instance.to_dict()
# create an instance of ListMembershipBindingsResponse from a dict
list_membership_bindings_response_from_dict = ListMembershipBindingsResponse.from_dict(list_membership_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


