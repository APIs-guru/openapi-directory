# GoogleCloudDatacatalogV1ModelSpec

Specification that applies to a model. Valid only for entries with the `MODEL` type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vertex_model_spec** | [**GoogleCloudDatacatalogV1VertexModelSpec**](GoogleCloudDatacatalogV1VertexModelSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_model_spec import GoogleCloudDatacatalogV1ModelSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ModelSpec from a JSON string
google_cloud_datacatalog_v1_model_spec_instance = GoogleCloudDatacatalogV1ModelSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ModelSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_model_spec_dict = google_cloud_datacatalog_v1_model_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ModelSpec from a dict
google_cloud_datacatalog_v1_model_spec_from_dict = GoogleCloudDatacatalogV1ModelSpec.from_dict(google_cloud_datacatalog_v1_model_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


