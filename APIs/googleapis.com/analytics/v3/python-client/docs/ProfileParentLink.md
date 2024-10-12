# ProfileParentLink

Parent link for this view (profile). Points to the web property to which this view (profile) belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the web property to which this view (profile) belongs. | [optional] 
**type** | **str** | Value is \&quot;analytics#webproperty\&quot;. | [optional] [default to 'analytics#webproperty']

## Example

```python
from openapi_client.models.profile_parent_link import ProfileParentLink

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileParentLink from a JSON string
profile_parent_link_instance = ProfileParentLink.from_json(json)
# print the JSON string representation of the object
print(ProfileParentLink.to_json())

# convert the object into a dict
profile_parent_link_dict = profile_parent_link_instance.to_dict()
# create an instance of ProfileParentLink from a dict
profile_parent_link_from_dict = ProfileParentLink.from_dict(profile_parent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


