# GoogleCloudDatacatalogV1PersonalDetails

Entry metadata relevant only to the user and private to them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**star_time** | **str** | Set if the entry is starred; unset otherwise. | [optional] 
**starred** | **bool** | True if the entry is starred by the user; false otherwise. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_personal_details import GoogleCloudDatacatalogV1PersonalDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1PersonalDetails from a JSON string
google_cloud_datacatalog_v1_personal_details_instance = GoogleCloudDatacatalogV1PersonalDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1PersonalDetails.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_personal_details_dict = google_cloud_datacatalog_v1_personal_details_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1PersonalDetails from a dict
google_cloud_datacatalog_v1_personal_details_from_dict = GoogleCloudDatacatalogV1PersonalDetails.from_dict(google_cloud_datacatalog_v1_personal_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


