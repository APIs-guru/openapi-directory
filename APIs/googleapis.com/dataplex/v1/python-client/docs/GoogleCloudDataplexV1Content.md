# GoogleCloudDataplexV1Content

Content represents a user-visible notebook or a sql script

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Content creation time. | [optional] [readonly] 
**data_text** | **str** | Required. Content data in string format. | [optional] 
**description** | **str** | Optional. Description of the content. | [optional] 
**labels** | **Dict[str, str]** | Optional. User defined labels for the content. | [optional] 
**name** | **str** | Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id} | [optional] [readonly] 
**notebook** | [**GoogleCloudDataplexV1ContentNotebook**](GoogleCloudDataplexV1ContentNotebook.md) |  | [optional] 
**path** | **str** | Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes. | [optional] 
**sql_script** | [**GoogleCloudDataplexV1ContentSqlScript**](GoogleCloudDataplexV1ContentSqlScript.md) |  | [optional] 
**uid** | **str** | Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the content was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_content import GoogleCloudDataplexV1Content

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Content from a JSON string
google_cloud_dataplex_v1_content_instance = GoogleCloudDataplexV1Content.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Content.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_content_dict = google_cloud_dataplex_v1_content_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Content from a dict
google_cloud_dataplex_v1_content_from_dict = GoogleCloudDataplexV1Content.from_dict(google_cloud_dataplex_v1_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


