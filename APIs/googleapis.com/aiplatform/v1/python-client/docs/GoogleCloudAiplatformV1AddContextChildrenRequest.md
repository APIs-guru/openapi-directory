# GoogleCloudAiplatformV1AddContextChildrenRequest

Request message for MetadataService.AddContextChildren.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_contexts** | **List[str]** | The resource names of the child Contexts. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_add_context_children_request import GoogleCloudAiplatformV1AddContextChildrenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1AddContextChildrenRequest from a JSON string
google_cloud_aiplatform_v1_add_context_children_request_instance = GoogleCloudAiplatformV1AddContextChildrenRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1AddContextChildrenRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_add_context_children_request_dict = google_cloud_aiplatform_v1_add_context_children_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1AddContextChildrenRequest from a dict
google_cloud_aiplatform_v1_add_context_children_request_from_dict = GoogleCloudAiplatformV1AddContextChildrenRequest.from_dict(google_cloud_aiplatform_v1_add_context_children_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


