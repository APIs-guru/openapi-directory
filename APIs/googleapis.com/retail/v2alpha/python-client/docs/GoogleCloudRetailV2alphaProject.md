# GoogleCloudRetailV2alphaProject

Metadata that describes a Cloud Retail Project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrolled_solutions** | **List[str]** | Output only. Retail API solutions that the project has enrolled. | [optional] [readonly] 
**name** | **str** | Output only. Full resource name of the retail project, such as &#x60;projects/{project_id_or_number}/retailProject&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_project import GoogleCloudRetailV2alphaProject

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaProject from a JSON string
google_cloud_retail_v2alpha_project_instance = GoogleCloudRetailV2alphaProject.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaProject.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_project_dict = google_cloud_retail_v2alpha_project_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaProject from a dict
google_cloud_retail_v2alpha_project_from_dict = GoogleCloudRetailV2alphaProject.from_dict(google_cloud_retail_v2alpha_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


