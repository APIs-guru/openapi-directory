# GroupCreateOrUpdateRequestProperties

Parameters supplied to the Create Group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Group description. | [optional] 
**display_name** | **str** | Group name. | 
**external_id** | **str** | Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory &#x60;aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;&#x60;; otherwise the value is null. | [optional] 
**type** | **str** | Group type. | [optional] 

## Example

```python
from openapi_client.models.group_create_or_update_request_properties import GroupCreateOrUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GroupCreateOrUpdateRequestProperties from a JSON string
group_create_or_update_request_properties_instance = GroupCreateOrUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(GroupCreateOrUpdateRequestProperties.to_json())

# convert the object into a dict
group_create_or_update_request_properties_dict = group_create_or_update_request_properties_instance.to_dict()
# create an instance of GroupCreateOrUpdateRequestProperties from a dict
group_create_or_update_request_properties_from_dict = GroupCreateOrUpdateRequestProperties.from_dict(group_create_or_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


