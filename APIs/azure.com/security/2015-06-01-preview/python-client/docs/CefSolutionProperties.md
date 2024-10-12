# CefSolutionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** |  | [optional] 
**hostname** | **str** |  | [optional] 
**last_event_received** | **str** |  | [optional] 
**device_type** | **str** |  | [optional] 
**device_vendor** | **str** |  | [optional] 
**workspace** | [**ConnectedWorkspace**](ConnectedWorkspace.md) |  | [optional] 

## Example

```python
from openapi_client.models.cef_solution_properties import CefSolutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CefSolutionProperties from a JSON string
cef_solution_properties_instance = CefSolutionProperties.from_json(json)
# print the JSON string representation of the object
print(CefSolutionProperties.to_json())

# convert the object into a dict
cef_solution_properties_dict = cef_solution_properties_instance.to_dict()
# create an instance of CefSolutionProperties from a dict
cef_solution_properties_from_dict = CefSolutionProperties.from_dict(cef_solution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


