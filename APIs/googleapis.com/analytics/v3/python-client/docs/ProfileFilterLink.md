# ProfileFilterLink

JSON template for an Analytics profile filter link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_ref** | [**FilterRef**](FilterRef.md) |  | [optional] 
**id** | **str** | Profile filter link ID. | [optional] 
**kind** | **str** | Resource type for Analytics filter. | [optional] [readonly] [default to 'analytics#profileFilterLink']
**profile_ref** | [**ProfileRef**](ProfileRef.md) |  | [optional] 
**rank** | **int** | The rank of this profile filter link relative to the other filters linked to the same profile. For readonly (i.e., list and get) operations, the rank always starts at 1. For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don&#39;t specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1. | [optional] 
**self_link** | **str** | Link for this profile filter link. | [optional] [readonly] 

## Example

```python
from openapi_client.models.profile_filter_link import ProfileFilterLink

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileFilterLink from a JSON string
profile_filter_link_instance = ProfileFilterLink.from_json(json)
# print the JSON string representation of the object
print(ProfileFilterLink.to_json())

# convert the object into a dict
profile_filter_link_dict = profile_filter_link_instance.to_dict()
# create an instance of ProfileFilterLink from a dict
profile_filter_link_from_dict = ProfileFilterLink.from_dict(profile_filter_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


