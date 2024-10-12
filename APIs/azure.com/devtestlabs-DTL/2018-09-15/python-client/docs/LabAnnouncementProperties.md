# LabAnnouncementProperties

Properties of a lab's announcement banner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **str** | Is the lab announcement active/enabled at this time? | [optional] 
**expiration_date** | **datetime** | The time at which the announcement expires (null for never) | [optional] 
**expired** | **bool** | Has this announcement expired? | [optional] 
**markdown** | **str** | The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] [readonly] 
**title** | **str** | The plain text title for the lab announcement | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] [readonly] 

## Example

```python
from openapi_client.models.lab_announcement_properties import LabAnnouncementProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabAnnouncementProperties from a JSON string
lab_announcement_properties_instance = LabAnnouncementProperties.from_json(json)
# print the JSON string representation of the object
print(LabAnnouncementProperties.to_json())

# convert the object into a dict
lab_announcement_properties_dict = lab_announcement_properties_instance.to_dict()
# create an instance of LabAnnouncementProperties from a dict
lab_announcement_properties_from_dict = LabAnnouncementProperties.from_dict(lab_announcement_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


