# GoogleCloudAiplatformV1Citation

Source attributions for content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | Output only. End index into the content. | [optional] [readonly] 
**license** | **str** | Output only. License of the attribution. | [optional] [readonly] 
**publication_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**start_index** | **int** | Output only. Start index into the content. | [optional] [readonly] 
**title** | **str** | Output only. Title of the attribution. | [optional] [readonly] 
**uri** | **str** | Output only. Url reference of the attribution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_citation import GoogleCloudAiplatformV1Citation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Citation from a JSON string
google_cloud_aiplatform_v1_citation_instance = GoogleCloudAiplatformV1Citation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Citation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_citation_dict = google_cloud_aiplatform_v1_citation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Citation from a dict
google_cloud_aiplatform_v1_citation_from_dict = GoogleCloudAiplatformV1Citation.from_dict(google_cloud_aiplatform_v1_citation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


