# ProfileChildLink

Child link for this view (profile). Points to the list of goals for this view (profile).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the list of goals for this view (profile). | [optional] 
**type** | **str** | Value is \&quot;analytics#goals\&quot;. | [optional] [default to 'analytics#goals']

## Example

```python
from openapi_client.models.profile_child_link import ProfileChildLink

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileChildLink from a JSON string
profile_child_link_instance = ProfileChildLink.from_json(json)
# print the JSON string representation of the object
print(ProfileChildLink.to_json())

# convert the object into a dict
profile_child_link_dict = profile_child_link_instance.to_dict()
# create an instance of ProfileChildLink from a dict
profile_child_link_from_dict = ProfileChildLink.from_dict(profile_child_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


