# GoogleCloudDatacatalogV1FilesetSpec

Specification that applies to a fileset. Valid only for entries with the 'FILESET' type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataplex_fileset** | [**GoogleCloudDatacatalogV1DataplexFilesetSpec**](GoogleCloudDatacatalogV1DataplexFilesetSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_fileset_spec import GoogleCloudDatacatalogV1FilesetSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1FilesetSpec from a JSON string
google_cloud_datacatalog_v1_fileset_spec_instance = GoogleCloudDatacatalogV1FilesetSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1FilesetSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_fileset_spec_dict = google_cloud_datacatalog_v1_fileset_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1FilesetSpec from a dict
google_cloud_datacatalog_v1_fileset_spec_from_dict = GoogleCloudDatacatalogV1FilesetSpec.from_dict(google_cloud_datacatalog_v1_fileset_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


