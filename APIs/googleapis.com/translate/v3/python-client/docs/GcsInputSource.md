# GcsInputSource

The Google Cloud Storage location for the input content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_uri** | **str** | Required. Source data URI. For example, &#x60;gs://my_bucket/my_object&#x60;. | [optional] 

## Example

```python
from openapi_client.models.gcs_input_source import GcsInputSource

# TODO update the JSON string below
json = "{}"
# create an instance of GcsInputSource from a JSON string
gcs_input_source_instance = GcsInputSource.from_json(json)
# print the JSON string representation of the object
print(GcsInputSource.to_json())

# convert the object into a dict
gcs_input_source_dict = gcs_input_source_instance.to_dict()
# create an instance of GcsInputSource from a dict
gcs_input_source_from_dict = GcsInputSource.from_dict(gcs_input_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


