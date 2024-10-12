# GoogleCloudDatacatalogV1CloudBigtableInstanceSpec

Specification that applies to Instance entries that are part of `CLOUD_BIGTABLE` system. (user_specified_type)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_bigtable_cluster_specs** | [**List[GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec]**](GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec.md) | The list of clusters for the Instance. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_cloud_bigtable_instance_spec import GoogleCloudDatacatalogV1CloudBigtableInstanceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1CloudBigtableInstanceSpec from a JSON string
google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_instance = GoogleCloudDatacatalogV1CloudBigtableInstanceSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1CloudBigtableInstanceSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_dict = google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1CloudBigtableInstanceSpec from a dict
google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_from_dict = GoogleCloudDatacatalogV1CloudBigtableInstanceSpec.from_dict(google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


