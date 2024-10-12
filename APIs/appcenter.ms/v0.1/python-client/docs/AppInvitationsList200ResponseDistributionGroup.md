# AppInvitationsList200ResponseDistributionGroup

The organization that owns the distribution group, if it exists

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | [**AppsList200ResponseInnerAllOfOwner**](AppsList200ResponseInnerAllOfOwner.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_invitations_list200_response_distribution_group import AppInvitationsList200ResponseDistributionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AppInvitationsList200ResponseDistributionGroup from a JSON string
app_invitations_list200_response_distribution_group_instance = AppInvitationsList200ResponseDistributionGroup.from_json(json)
# print the JSON string representation of the object
print(AppInvitationsList200ResponseDistributionGroup.to_json())

# convert the object into a dict
app_invitations_list200_response_distribution_group_dict = app_invitations_list200_response_distribution_group_instance.to_dict()
# create an instance of AppInvitationsList200ResponseDistributionGroup from a dict
app_invitations_list200_response_distribution_group_from_dict = AppInvitationsList200ResponseDistributionGroup.from_dict(app_invitations_list200_response_distribution_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


