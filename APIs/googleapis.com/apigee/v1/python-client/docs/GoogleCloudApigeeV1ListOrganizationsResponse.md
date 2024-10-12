# GoogleCloudApigeeV1ListOrganizationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizations** | [**List[GoogleCloudApigeeV1OrganizationProjectMapping]**](GoogleCloudApigeeV1OrganizationProjectMapping.md) | List of Apigee organizations and associated Google Cloud projects. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_organizations_response import GoogleCloudApigeeV1ListOrganizationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListOrganizationsResponse from a JSON string
google_cloud_apigee_v1_list_organizations_response_instance = GoogleCloudApigeeV1ListOrganizationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListOrganizationsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_organizations_response_dict = google_cloud_apigee_v1_list_organizations_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListOrganizationsResponse from a dict
google_cloud_apigee_v1_list_organizations_response_from_dict = GoogleCloudApigeeV1ListOrganizationsResponse.from_dict(google_cloud_apigee_v1_list_organizations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


