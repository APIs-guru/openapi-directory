# AdaptiveApplicationControlsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AdaptiveApplicationControlsListDefaultResponseError**](AdaptiveApplicationControlsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.adaptive_application_controls_list_default_response import AdaptiveApplicationControlsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveApplicationControlsListDefaultResponse from a JSON string
adaptive_application_controls_list_default_response_instance = AdaptiveApplicationControlsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AdaptiveApplicationControlsListDefaultResponse.to_json())

# convert the object into a dict
adaptive_application_controls_list_default_response_dict = adaptive_application_controls_list_default_response_instance.to_dict()
# create an instance of AdaptiveApplicationControlsListDefaultResponse from a dict
adaptive_application_controls_list_default_response_from_dict = AdaptiveApplicationControlsListDefaultResponse.from_dict(adaptive_application_controls_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


