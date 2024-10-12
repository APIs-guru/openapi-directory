# LaunchFlexTemplateResponse

Response to the request to launch a job from Flex Template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**Job**](Job.md) |  | [optional] 

## Example

```python
from openapi_client.models.launch_flex_template_response import LaunchFlexTemplateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LaunchFlexTemplateResponse from a JSON string
launch_flex_template_response_instance = LaunchFlexTemplateResponse.from_json(json)
# print the JSON string representation of the object
print(LaunchFlexTemplateResponse.to_json())

# convert the object into a dict
launch_flex_template_response_dict = launch_flex_template_response_instance.to_dict()
# create an instance of LaunchFlexTemplateResponse from a dict
launch_flex_template_response_from_dict = LaunchFlexTemplateResponse.from_dict(launch_flex_template_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


