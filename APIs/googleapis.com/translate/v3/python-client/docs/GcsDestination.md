# GcsDestination

The Google Cloud Storage location for the output content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri_prefix** | **str** | Required. The bucket used in &#39;output_uri_prefix&#39; must exist and there must be no files under &#39;output_uri_prefix&#39;. &#39;output_uri_prefix&#39; must end with \&quot;/\&quot; and start with \&quot;gs://\&quot;. One &#39;output_uri_prefix&#39; can only be used by one batch translation job at a time. Otherwise an INVALID_ARGUMENT (400) error is returned. | [optional] 

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


