# GoogleCloudApigeeV1OrganizationProjectMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Output only. The Google Cloud region where control plane data is located. For more information, see https://cloud.google.com/about/locations/. | [optional] [readonly] 
**organization** | **str** | Name of the Apigee organization. | [optional] 
**project_id** | **str** | Google Cloud project associated with the Apigee organization | [optional] 
**project_ids** | **List[str]** | DEPRECATED: Use &#x60;project_id&#x60;. An Apigee Organization is mapped to a single project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_organization_project_mapping import GoogleCloudApigeeV1OrganizationProjectMapping

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1OrganizationProjectMapping from a JSON string
google_cloud_apigee_v1_organization_project_mapping_instance = GoogleCloudApigeeV1OrganizationProjectMapping.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1OrganizationProjectMapping.to_json())

# convert the object into a dict
google_cloud_apigee_v1_organization_project_mapping_dict = google_cloud_apigee_v1_organization_project_mapping_instance.to_dict()
# create an instance of GoogleCloudApigeeV1OrganizationProjectMapping from a dict
google_cloud_apigee_v1_organization_project_mapping_from_dict = GoogleCloudApigeeV1OrganizationProjectMapping.from_dict(google_cloud_apigee_v1_organization_project_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


