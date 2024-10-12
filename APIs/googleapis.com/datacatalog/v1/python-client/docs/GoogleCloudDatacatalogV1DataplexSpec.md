# GoogleCloudDatacatalogV1DataplexSpec

Common Dataplex fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | Fully qualified resource name of an asset in Dataplex, to which the underlying data source (Cloud Storage bucket or BigQuery dataset) of the entity is attached. | [optional] 
**compression_format** | **str** | Compression format of the data, e.g., zip, gzip etc. | [optional] 
**data_format** | [**GoogleCloudDatacatalogV1PhysicalSchema**](GoogleCloudDatacatalogV1PhysicalSchema.md) |  | [optional] 
**project_id** | **str** | Project ID of the underlying Cloud Storage or BigQuery data. Note that this may not be the same project as the correspondingly Dataplex lake / zone / asset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_dataplex_spec import GoogleCloudDatacatalogV1DataplexSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1DataplexSpec from a JSON string
google_cloud_datacatalog_v1_dataplex_spec_instance = GoogleCloudDatacatalogV1DataplexSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1DataplexSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_dataplex_spec_dict = google_cloud_datacatalog_v1_dataplex_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1DataplexSpec from a dict
google_cloud_datacatalog_v1_dataplex_spec_from_dict = GoogleCloudDatacatalogV1DataplexSpec.from_dict(google_cloud_datacatalog_v1_dataplex_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


