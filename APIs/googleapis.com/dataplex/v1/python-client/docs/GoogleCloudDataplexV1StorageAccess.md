# GoogleCloudDataplexV1StorageAccess

Describes the access mechanism of the data within its storage location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**read** | **str** | Output only. Describes the read access mechanism of the data. Not user settable. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_storage_access import GoogleCloudDataplexV1StorageAccess

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1StorageAccess from a JSON string
google_cloud_dataplex_v1_storage_access_instance = GoogleCloudDataplexV1StorageAccess.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1StorageAccess.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_storage_access_dict = google_cloud_dataplex_v1_storage_access_instance.to_dict()
# create an instance of GoogleCloudDataplexV1StorageAccess from a dict
google_cloud_dataplex_v1_storage_access_from_dict = GoogleCloudDataplexV1StorageAccess.from_dict(google_cloud_dataplex_v1_storage_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


