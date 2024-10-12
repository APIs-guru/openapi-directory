# GoogleCloudDatacatalogV1CrossRegionalSource

Cross-regional source used to import an existing taxonomy into a different region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxonomy** | **str** | Required. The resource name of the source taxonomy to import. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_cross_regional_source import GoogleCloudDatacatalogV1CrossRegionalSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1CrossRegionalSource from a JSON string
google_cloud_datacatalog_v1_cross_regional_source_instance = GoogleCloudDatacatalogV1CrossRegionalSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1CrossRegionalSource.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_cross_regional_source_dict = google_cloud_datacatalog_v1_cross_regional_source_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1CrossRegionalSource from a dict
google_cloud_datacatalog_v1_cross_regional_source_from_dict = GoogleCloudDatacatalogV1CrossRegionalSource.from_dict(google_cloud_datacatalog_v1_cross_regional_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


