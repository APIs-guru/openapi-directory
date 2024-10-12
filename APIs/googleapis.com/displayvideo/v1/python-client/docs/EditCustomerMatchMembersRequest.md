# EditCustomerMatchMembersRequest

Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_contact_info_list** | [**ContactInfoList**](ContactInfoList.md) |  | [optional] 
**added_mobile_device_id_list** | [**MobileDeviceIdList**](MobileDeviceIdList.md) |  | [optional] 
**advertiser_id** | **str** | Required. The ID of the owner advertiser of the updated Customer Match FirstAndThirdPartyAudience. | [optional] 
**removed_contact_info_list** | [**ContactInfoList**](ContactInfoList.md) |  | [optional] 
**removed_mobile_device_id_list** | [**MobileDeviceIdList**](MobileDeviceIdList.md) |  | [optional] 

## Example

```python
from openapi_client.models.edit_customer_match_members_request import EditCustomerMatchMembersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditCustomerMatchMembersRequest from a JSON string
edit_customer_match_members_request_instance = EditCustomerMatchMembersRequest.from_json(json)
# print the JSON string representation of the object
print(EditCustomerMatchMembersRequest.to_json())

# convert the object into a dict
edit_customer_match_members_request_dict = edit_customer_match_members_request_instance.to_dict()
# create an instance of EditCustomerMatchMembersRequest from a dict
edit_customer_match_members_request_from_dict = EditCustomerMatchMembersRequest.from_dict(edit_customer_match_members_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


