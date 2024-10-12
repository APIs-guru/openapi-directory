# GoogleCloudDatacatalogV1FeatureOnlineStoreSpec

Detail description of the source information of a Vertex Feature Online Store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_type** | **str** | Output only. Type of underelaying storage for the FeatureOnlineStore. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_feature_online_store_spec import GoogleCloudDatacatalogV1FeatureOnlineStoreSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1FeatureOnlineStoreSpec from a JSON string
google_cloud_datacatalog_v1_feature_online_store_spec_instance = GoogleCloudDatacatalogV1FeatureOnlineStoreSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1FeatureOnlineStoreSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_feature_online_store_spec_dict = google_cloud_datacatalog_v1_feature_online_store_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1FeatureOnlineStoreSpec from a dict
google_cloud_datacatalog_v1_feature_online_store_spec_from_dict = GoogleCloudDatacatalogV1FeatureOnlineStoreSpec.from_dict(google_cloud_datacatalog_v1_feature_online_store_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


