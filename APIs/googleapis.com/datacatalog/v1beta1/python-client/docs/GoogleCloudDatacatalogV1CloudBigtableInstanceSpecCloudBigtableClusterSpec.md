# GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec

Spec that applies to clusters of an Instance of Cloud Bigtable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of the cluster. | [optional] 
**linked_resource** | **str** | A link back to the parent resource, in this case Instance. | [optional] 
**location** | **str** | Location of the cluster, typically a Cloud zone. | [optional] 
**type** | **str** | Type of the resource. For a cluster this would be \&quot;CLUSTER\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_cloud_bigtable_cluster_spec import GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec from a JSON string
google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_cloud_bigtable_cluster_spec_instance = GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_cloud_bigtable_cluster_spec_dict = google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_cloud_bigtable_cluster_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec from a dict
google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_cloud_bigtable_cluster_spec_from_dict = GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec.from_dict(google_cloud_datacatalog_v1_cloud_bigtable_instance_spec_cloud_bigtable_cluster_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


