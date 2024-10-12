# ProfileMetadata

The metadata about a profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** | Output only. The profile object type. | [optional] [readonly] 
**user_types** | **List[str]** | Output only. The user types. | [optional] [readonly] 

## Example

```python
from openapi_client.models.profile_metadata import ProfileMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileMetadata from a JSON string
profile_metadata_instance = ProfileMetadata.from_json(json)
# print the JSON string representation of the object
print(ProfileMetadata.to_json())

# convert the object into a dict
profile_metadata_dict = profile_metadata_instance.to_dict()
# create an instance of ProfileMetadata from a dict
profile_metadata_from_dict = ProfileMetadata.from_dict(profile_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


