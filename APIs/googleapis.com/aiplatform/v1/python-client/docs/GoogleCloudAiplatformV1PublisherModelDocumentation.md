# GoogleCloudAiplatformV1PublisherModelDocumentation

A named piece of documentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Required. Content of this piece of document (in Markdown format). | [optional] 
**title** | **str** | Required. E.g., OVERVIEW, USE CASES, DOCUMENTATION, SDK &amp; SAMPLES, JAVA, NODE.JS, etc.. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_publisher_model_documentation import GoogleCloudAiplatformV1PublisherModelDocumentation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PublisherModelDocumentation from a JSON string
google_cloud_aiplatform_v1_publisher_model_documentation_instance = GoogleCloudAiplatformV1PublisherModelDocumentation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PublisherModelDocumentation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_publisher_model_documentation_dict = google_cloud_aiplatform_v1_publisher_model_documentation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PublisherModelDocumentation from a dict
google_cloud_aiplatform_v1_publisher_model_documentation_from_dict = GoogleCloudAiplatformV1PublisherModelDocumentation.from_dict(google_cloud_aiplatform_v1_publisher_model_documentation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


