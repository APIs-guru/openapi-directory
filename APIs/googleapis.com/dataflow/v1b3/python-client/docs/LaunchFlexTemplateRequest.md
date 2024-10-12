# LaunchFlexTemplateRequest

A request to launch a Cloud Dataflow job from a FlexTemplate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**launch_parameter** | [**LaunchFlexTemplateParameter**](LaunchFlexTemplateParameter.md) |  | [optional] 
**validate_only** | **bool** | If true, the request is validated but not actually executed. Defaults to false. | [optional] 

## Example

```python
from openapi_client.models.launch_flex_template_request import LaunchFlexTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LaunchFlexTemplateRequest from a JSON string
launch_flex_template_request_instance = LaunchFlexTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(LaunchFlexTemplateRequest.to_json())

# convert the object into a dict
launch_flex_template_request_dict = launch_flex_template_request_instance.to_dict()
# create an instance of LaunchFlexTemplateRequest from a dict
launch_flex_template_request_from_dict = LaunchFlexTemplateRequest.from_dict(launch_flex_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


