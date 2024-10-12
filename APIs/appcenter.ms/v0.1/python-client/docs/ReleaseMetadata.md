# ReleaseMetadata

An object containing all the release metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dsa_signature** | **str** | dsa signature of the release for the sparkle feed. | [optional] 
**ed_signature** | **str** | edDSA signature of the release for the sparkle feed. | [optional] 

## Example

```python
from openapi_client.models.release_metadata import ReleaseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseMetadata from a JSON string
release_metadata_instance = ReleaseMetadata.from_json(json)
# print the JSON string representation of the object
print(ReleaseMetadata.to_json())

# convert the object into a dict
release_metadata_dict = release_metadata_instance.to_dict()
# create an instance of ReleaseMetadata from a dict
release_metadata_from_dict = ReleaseMetadata.from_dict(release_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


