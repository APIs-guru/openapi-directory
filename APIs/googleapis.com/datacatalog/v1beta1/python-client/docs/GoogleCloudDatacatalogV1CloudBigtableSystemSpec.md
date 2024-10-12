# GoogleCloudDatacatalogV1CloudBigtableSystemSpec

Specification that applies to all entries that are part of `CLOUD_BIGTABLE` system (user_specified_type)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_display_name** | **str** | Display name of the Instance. This is user specified and different from the resource name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_cloud_bigtable_system_spec import GoogleCloudDatacatalogV1CloudBigtableSystemSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1CloudBigtableSystemSpec from a JSON string
google_cloud_datacatalog_v1_cloud_bigtable_system_spec_instance = GoogleCloudDatacatalogV1CloudBigtableSystemSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1CloudBigtableSystemSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_cloud_bigtable_system_spec_dict = google_cloud_datacatalog_v1_cloud_bigtable_system_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1CloudBigtableSystemSpec from a dict
google_cloud_datacatalog_v1_cloud_bigtable_system_spec_from_dict = GoogleCloudDatacatalogV1CloudBigtableSystemSpec.from_dict(google_cloud_datacatalog_v1_cloud_bigtable_system_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


