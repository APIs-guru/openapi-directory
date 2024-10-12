# ContactGroup

A contact group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_data** | [**List[GroupClientData]**](GroupClientData.md) | The group&#39;s client data. | [optional] 
**etag** | **str** | The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the resource. Used for web cache validation. | [optional] 
**formatted_name** | **str** | Output only. The name translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale for system groups names. Group names set by the owner are the same as name. | [optional] [readonly] 
**group_type** | **str** | Output only. The contact group type. | [optional] [readonly] 
**member_count** | **int** | Output only. The total number of contacts in the group irrespective of max members in specified in the request. | [optional] [readonly] 
**member_resource_names** | **List[str]** | Output only. The list of contact person resource names that are members of the contact group. The field is only populated for GET requests and will only return as many members as &#x60;maxMembers&#x60; in the get request. | [optional] [readonly] 
**metadata** | [**ContactGroupMetadata**](ContactGroupMetadata.md) |  | [optional] 
**name** | **str** | The contact group name set by the group owner or a system provided name for system groups. For [&#x60;contactGroups.create&#x60;](/people/api/rest/v1/contactGroups/create) or [&#x60;contactGroups.update&#x60;](/people/api/rest/v1/contactGroups/update) the name must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. | [optional] 
**resource_name** | **str** | The resource name for the contact group, assigned by the server. An ASCII string, in the form of &#x60;contactGroups/{contact_group_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.contact_group import ContactGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ContactGroup from a JSON string
contact_group_instance = ContactGroup.from_json(json)
# print the JSON string representation of the object
print(ContactGroup.to_json())

# convert the object into a dict
contact_group_dict = contact_group_instance.to_dict()
# create an instance of ContactGroup from a dict
contact_group_from_dict = ContactGroup.from_dict(contact_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


