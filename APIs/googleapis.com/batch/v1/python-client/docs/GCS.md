# GCS

Represents a Google Cloud Storage volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_path** | **str** | Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/ | [optional] 

## Example

```python
from openapi_client.models.gcs import GCS

# TODO update the JSON string below
json = "{}"
# create an instance of GCS from a JSON string
gcs_instance = GCS.from_json(json)
# print the JSON string representation of the object
print(GCS.to_json())

# convert the object into a dict
gcs_dict = gcs_instance.to_dict()
# create an instance of GCS from a dict
gcs_from_dict = GCS.from_dict(gcs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


