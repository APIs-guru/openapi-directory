# GoogleCloudDatacatalogV1ServiceSpec

Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_bigtable_instance_spec** | [**GoogleCloudDatacatalogV1CloudBigtableInstanceSpec**](GoogleCloudDatacatalogV1CloudBigtableInstanceSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_service_spec import GoogleCloudDatacatalogV1ServiceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ServiceSpec from a JSON string
google_cloud_datacatalog_v1_service_spec_instance = GoogleCloudDatacatalogV1ServiceSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ServiceSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_service_spec_dict = google_cloud_datacatalog_v1_service_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ServiceSpec from a dict
google_cloud_datacatalog_v1_service_spec_from_dict = GoogleCloudDatacatalogV1ServiceSpec.from_dict(google_cloud_datacatalog_v1_service_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


