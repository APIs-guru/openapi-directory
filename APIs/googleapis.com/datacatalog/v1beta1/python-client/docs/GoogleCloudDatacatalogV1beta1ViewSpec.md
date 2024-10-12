# GoogleCloudDatacatalogV1beta1ViewSpec

Table view specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_query** | **str** | Output only. The query that defines the table view. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_view_spec import GoogleCloudDatacatalogV1beta1ViewSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1ViewSpec from a JSON string
google_cloud_datacatalog_v1beta1_view_spec_instance = GoogleCloudDatacatalogV1beta1ViewSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1ViewSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_view_spec_dict = google_cloud_datacatalog_v1beta1_view_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1ViewSpec from a dict
google_cloud_datacatalog_v1beta1_view_spec_from_dict = GoogleCloudDatacatalogV1beta1ViewSpec.from_dict(google_cloud_datacatalog_v1beta1_view_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


