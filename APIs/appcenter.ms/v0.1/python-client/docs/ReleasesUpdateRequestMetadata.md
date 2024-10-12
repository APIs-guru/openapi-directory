# ReleasesUpdateRequestMetadata

An object containing all the release metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dsa_signature** | **str** | dsa signature of the release for the sparkle feed. | [optional] 
**ed_signature** | **str** | edDSA signature of the release for the sparkle feed. | [optional] 

## Example

```python
from openapi_client.models.releases_update_request_metadata import ReleasesUpdateRequestMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesUpdateRequestMetadata from a JSON string
releases_update_request_metadata_instance = ReleasesUpdateRequestMetadata.from_json(json)
# print the JSON string representation of the object
print(ReleasesUpdateRequestMetadata.to_json())

# convert the object into a dict
releases_update_request_metadata_dict = releases_update_request_metadata_instance.to_dict()
# create an instance of ReleasesUpdateRequestMetadata from a dict
releases_update_request_metadata_from_dict = ReleasesUpdateRequestMetadata.from_dict(releases_update_request_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


