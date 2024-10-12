# GoogleCloudApigeeV1ApiCategory

`ApiCategory` represents an API category. [Catalog items](/apigee/docs/reference/apis/apigee/rest/v1/organizations.sites.apidocs) can be tagged with API categories; users viewing the API catalog in the portal will have the option to browse the catalog by category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the category (a UUID). | [optional] 
**name** | **str** | Name of the category. | [optional] 
**site_id** | **str** | Name of the portal. | [optional] 
**update_time** | **str** | Time the category was last modified in milliseconds since epoch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_category import GoogleCloudApigeeV1ApiCategory

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiCategory from a JSON string
google_cloud_apigee_v1_api_category_instance = GoogleCloudApigeeV1ApiCategory.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiCategory.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_category_dict = google_cloud_apigee_v1_api_category_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiCategory from a dict
google_cloud_apigee_v1_api_category_from_dict = GoogleCloudApigeeV1ApiCategory.from_dict(google_cloud_apigee_v1_api_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


