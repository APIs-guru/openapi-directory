# GcsSource

The Google Cloud Storage location where the input will be read from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported. | [optional] 

## Example

```python
from openapi_client.models.gcs_source import GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GcsSource from a JSON string
gcs_source_instance = GcsSource.from_json(json)
# print the JSON string representation of the object
print(GcsSource.to_json())

# convert the object into a dict
gcs_source_dict = gcs_source_instance.to_dict()
# create an instance of GcsSource from a dict
gcs_source_from_dict = GcsSource.from_dict(gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


