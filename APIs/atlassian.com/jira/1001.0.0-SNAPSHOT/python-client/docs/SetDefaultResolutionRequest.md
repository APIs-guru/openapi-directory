# SetDefaultResolutionRequest

The new default issue resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the new default issue resolution. Must be an existing ID or null. Setting this to null erases the default resolution setting. | 

## Example

```python
from openapi_client.models.set_default_resolution_request import SetDefaultResolutionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetDefaultResolutionRequest from a JSON string
set_default_resolution_request_instance = SetDefaultResolutionRequest.from_json(json)
# print the JSON string representation of the object
print(SetDefaultResolutionRequest.to_json())

# convert the object into a dict
set_default_resolution_request_dict = set_default_resolution_request_instance.to_dict()
# create an instance of SetDefaultResolutionRequest from a dict
set_default_resolution_request_from_dict = SetDefaultResolutionRequest.from_dict(set_default_resolution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


