# CreateVersionMetadataV1

Metadata for the given google.longrunning.Operation during a google.appengine.v1.CreateVersionRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_build_id** | **str** | The Cloud Build ID if one was created as part of the version create. @OutputOnly | [optional] 

## Example

```python
from openapi_client.models.create_version_metadata_v1 import CreateVersionMetadataV1

# TODO update the JSON string below
json = "{}"
# create an instance of CreateVersionMetadataV1 from a JSON string
create_version_metadata_v1_instance = CreateVersionMetadataV1.from_json(json)
# print the JSON string representation of the object
print(CreateVersionMetadataV1.to_json())

# convert the object into a dict
create_version_metadata_v1_dict = create_version_metadata_v1_instance.to_dict()
# create an instance of CreateVersionMetadataV1 from a dict
create_version_metadata_v1_from_dict = CreateVersionMetadataV1.from_dict(create_version_metadata_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


