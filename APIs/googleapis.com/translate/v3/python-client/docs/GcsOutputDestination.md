# GcsOutputDestination

The Google Cloud Storage location for the output content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri_prefix** | **str** | Required. Google Cloud Storage URI to output directory. For example, &#x60;gs://bucket/directory&#x60;. The requesting user must have write permission to the bucket. The directory will be created if it doesn&#39;t exist. | [optional] 

## Example

```python
from openapi_client.models.gcs_output_destination import GcsOutputDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GcsOutputDestination from a JSON string
gcs_output_destination_instance = GcsOutputDestination.from_json(json)
# print the JSON string representation of the object
print(GcsOutputDestination.to_json())

# convert the object into a dict
gcs_output_destination_dict = gcs_output_destination_instance.to_dict()
# create an instance of GcsOutputDestination from a dict
gcs_output_destination_from_dict = GcsOutputDestination.from_dict(gcs_output_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


