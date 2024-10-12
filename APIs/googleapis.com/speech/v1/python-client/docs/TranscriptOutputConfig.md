# TranscriptOutputConfig

Specifies an optional destination for the recognition results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri** | **str** | Specifies a Cloud Storage URI for the recognition results. Must be specified in the format: &#x60;gs://bucket_name/object_name&#x60;, and the bucket must already exist. | [optional] 

## Example

```python
from openapi_client.models.transcript_output_config import TranscriptOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TranscriptOutputConfig from a JSON string
transcript_output_config_instance = TranscriptOutputConfig.from_json(json)
# print the JSON string representation of the object
print(TranscriptOutputConfig.to_json())

# convert the object into a dict
transcript_output_config_dict = transcript_output_config_instance.to_dict()
# create an instance of TranscriptOutputConfig from a dict
transcript_output_config_from_dict = TranscriptOutputConfig.from_dict(transcript_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


