# GcsDestination

The Google Cloud Storage location where the output is to be written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri_prefix** | **str** | Required. Google Cloud Storage URI to output directory, up to 2000 characters long. Accepted forms: * Prefix path: gs://bucket/directory The requesting user must have write permission to the bucket. The directory is created if it doesn&#39;t exist. | [optional] 

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


