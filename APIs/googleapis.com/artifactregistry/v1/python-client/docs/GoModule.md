# GoModule

GoModule represents a Go module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the Go module is created. | [optional] [readonly] 
**name** | **str** | The resource name of a Go module. | [optional] 
**update_time** | **str** | Output only. The time when the Go module is updated. | [optional] [readonly] 
**version** | **str** | The version of the Go module. Must be a valid canonical version as defined in https://go.dev/ref/mod#glos-canonical-version. | [optional] 

## Example

```python
from openapi_client.models.go_module import GoModule

# TODO update the JSON string below
json = "{}"
# create an instance of GoModule from a JSON string
go_module_instance = GoModule.from_json(json)
# print the JSON string representation of the object
print(GoModule.to_json())

# convert the object into a dict
go_module_dict = go_module_instance.to_dict()
# create an instance of GoModule from a dict
go_module_from_dict = GoModule.from_dict(go_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


