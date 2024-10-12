# GcsDestination

A Cloud Storage location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The uri of the Cloud Storage object. It&#39;s the same uri that is used by gsutil. For example: \&quot;gs://bucket_name/object_name\&quot;. See [Quickstart: Using the gsutil tool] (https://cloud.google.com/storage/docs/quickstart-gsutil) for examples. | [optional] 

## Example

```python
from openapi_client.models.gcs_destination import GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GcsDestination from a JSON string
gcs_destination_instance = GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GcsDestination.to_json())

# convert the object into a dict
gcs_destination_dict = gcs_destination_instance.to_dict()
# create an instance of GcsDestination from a dict
gcs_destination_from_dict = GcsDestination.from_dict(gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


