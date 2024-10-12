# LookupMembershipNameResponse

The response message for MembershipsService.LookupMembershipName.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up &#x60;Membership&#x60;. Must be of the form &#x60;groups/{group}/memberships/{membership}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.lookup_membership_name_response import LookupMembershipNameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LookupMembershipNameResponse from a JSON string
lookup_membership_name_response_instance = LookupMembershipNameResponse.from_json(json)
# print the JSON string representation of the object
print(LookupMembershipNameResponse.to_json())

# convert the object into a dict
lookup_membership_name_response_dict = lookup_membership_name_response_instance.to_dict()
# create an instance of LookupMembershipNameResponse from a dict
lookup_membership_name_response_from_dict = LookupMembershipNameResponse.from_dict(lookup_membership_name_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


