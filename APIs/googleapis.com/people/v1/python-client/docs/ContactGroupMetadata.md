# ContactGroupMetadata

The metadata about a contact group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | Output only. True if the contact group resource has been deleted. Populated only for [&#x60;ListContactGroups&#x60;](/people/api/rest/v1/contactgroups/list) requests that include a sync token. | [optional] [readonly] 
**update_time** | **str** | Output only. The time the group was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.contact_group_metadata import ContactGroupMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ContactGroupMetadata from a JSON string
contact_group_metadata_instance = ContactGroupMetadata.from_json(json)
# print the JSON string representation of the object
print(ContactGroupMetadata.to_json())

# convert the object into a dict
contact_group_metadata_dict = contact_group_metadata_instance.to_dict()
# create an instance of ContactGroupMetadata from a dict
contact_group_metadata_from_dict = ContactGroupMetadata.from_dict(contact_group_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


