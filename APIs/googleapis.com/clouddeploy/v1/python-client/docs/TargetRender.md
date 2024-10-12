# TargetRender

Details of rendering for a single target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_cause** | **str** | Output only. Reason this render failed. This will always be unspecified while the render in progress. | [optional] [readonly] 
**failure_message** | **str** | Output only. Additional information about the render failure, if available. | [optional] [readonly] 
**metadata** | [**RenderMetadata**](RenderMetadata.md) |  | [optional] 
**rendering_build** | **str** | Output only. The resource name of the Cloud Build &#x60;Build&#x60; object that is used to render the manifest for this target. Format is &#x60;projects/{project}/locations/{location}/builds/{build}&#x60;. | [optional] [readonly] 
**rendering_state** | **str** | Output only. Current state of the render operation for this Target. | [optional] [readonly] 

## Example

```python
from openapi_client.models.target_render import TargetRender

# TODO update the JSON string below
json = "{}"
# create an instance of TargetRender from a JSON string
target_render_instance = TargetRender.from_json(json)
# print the JSON string representation of the object
print(TargetRender.to_json())

# convert the object into a dict
target_render_dict = target_render_instance.to_dict()
# create an instance of TargetRender from a dict
target_render_from_dict = TargetRender.from_dict(target_render_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


