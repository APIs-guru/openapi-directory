# MandatoryServiceAnnouncement

Alert Created by the MSA team for communications necessary for continued use of Google Workspace Products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Detailed, freeform text describing the announcement | [optional] 
**title** | **str** | One line summary of the announcement | [optional] 

## Example

```python
from openapi_client.models.mandatory_service_announcement import MandatoryServiceAnnouncement

# TODO update the JSON string below
json = "{}"
# create an instance of MandatoryServiceAnnouncement from a JSON string
mandatory_service_announcement_instance = MandatoryServiceAnnouncement.from_json(json)
# print the JSON string representation of the object
print(MandatoryServiceAnnouncement.to_json())

# convert the object into a dict
mandatory_service_announcement_dict = mandatory_service_announcement_instance.to_dict()
# create an instance of MandatoryServiceAnnouncement from a dict
mandatory_service_announcement_from_dict = MandatoryServiceAnnouncement.from_dict(mandatory_service_announcement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


