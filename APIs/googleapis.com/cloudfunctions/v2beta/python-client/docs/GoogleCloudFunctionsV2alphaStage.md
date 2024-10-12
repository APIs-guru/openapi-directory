# GoogleCloudFunctionsV2alphaStage

Each Stage of the deployment process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Message describing the Stage | [optional] 
**name** | **str** | Name of the Stage. This will be unique for each Stage. | [optional] 
**resource** | **str** | Resource of the Stage | [optional] 
**resource_uri** | **str** | Link to the current Stage resource | [optional] 
**state** | **str** | Current state of the Stage | [optional] 
**state_messages** | [**List[GoogleCloudFunctionsV2alphaStateMessage]**](GoogleCloudFunctionsV2alphaStateMessage.md) | State messages from the current Stage. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_functions_v2alpha_stage import GoogleCloudFunctionsV2alphaStage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudFunctionsV2alphaStage from a JSON string
google_cloud_functions_v2alpha_stage_instance = GoogleCloudFunctionsV2alphaStage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudFunctionsV2alphaStage.to_json())

# convert the object into a dict
google_cloud_functions_v2alpha_stage_dict = google_cloud_functions_v2alpha_stage_instance.to_dict()
# create an instance of GoogleCloudFunctionsV2alphaStage from a dict
google_cloud_functions_v2alpha_stage_from_dict = GoogleCloudFunctionsV2alphaStage.from_dict(google_cloud_functions_v2alpha_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


