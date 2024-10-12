# GcsProfile

Cloud Storage bucket profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | Required. The full project and resource path for Cloud Storage bucket including the name. | [optional] 
**root_path** | **str** | The root path inside the Cloud Storage bucket. | [optional] 

## Example

```python
from openapi_client.models.gcs_profile import GcsProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GcsProfile from a JSON string
gcs_profile_instance = GcsProfile.from_json(json)
# print the JSON string representation of the object
print(GcsProfile.to_json())

# convert the object into a dict
gcs_profile_dict = gcs_profile_instance.to_dict()
# create an instance of GcsProfile from a dict
gcs_profile_from_dict = GcsProfile.from_dict(gcs_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


