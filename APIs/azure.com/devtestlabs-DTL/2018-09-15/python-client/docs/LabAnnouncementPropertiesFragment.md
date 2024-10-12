# LabAnnouncementPropertiesFragment

Properties of a lab's announcement banner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **str** | Is the lab announcement active/enabled at this time? | [optional] 
**expiration_date** | **datetime** | The time at which the announcement expires (null for never) | [optional] 
**expired** | **bool** | Has this announcement expired? | [optional] 
**markdown** | **str** | The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. | [optional] 
**title** | **str** | The plain text title for the lab announcement | [optional] 

## Example

```python
from openapi_client.models.lab_announcement_properties_fragment import LabAnnouncementPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of LabAnnouncementPropertiesFragment from a JSON string
lab_announcement_properties_fragment_instance = LabAnnouncementPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(LabAnnouncementPropertiesFragment.to_json())

# convert the object into a dict
lab_announcement_properties_fragment_dict = lab_announcement_properties_fragment_instance.to_dict()
# create an instance of LabAnnouncementPropertiesFragment from a dict
lab_announcement_properties_fragment_from_dict = LabAnnouncementPropertiesFragment.from_dict(lab_announcement_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


