# Changelog

A log of changes made to issue fields. Changelogs related to workflow associations are currently being deprecated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**UserDetails**](UserDetails.md) | The user who made the change. | [optional] [readonly] 
**created** | **datetime** | The date on which the change took place. | [optional] [readonly] 
**history_metadata** | [**HistoryMetadata**](HistoryMetadata.md) | The history metadata associated with the changed. | [optional] [readonly] 
**id** | **str** | The ID of the changelog. | [optional] [readonly] 
**items** | [**List[ChangeDetails]**](ChangeDetails.md) | The list of items changed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.changelog import Changelog

# TODO update the JSON string below
json = "{}"
# create an instance of Changelog from a JSON string
changelog_instance = Changelog.from_json(json)
# print the JSON string representation of the object
print(Changelog.to_json())

# convert the object into a dict
changelog_dict = changelog_instance.to_dict()
# create an instance of Changelog from a dict
changelog_from_dict = Changelog.from_dict(changelog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


