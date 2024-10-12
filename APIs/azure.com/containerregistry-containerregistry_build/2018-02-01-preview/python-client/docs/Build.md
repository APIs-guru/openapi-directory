# Build

Build resource properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BuildProperties**](BuildProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.build import Build

# TODO update the JSON string below
json = "{}"
# create an instance of Build from a JSON string
build_instance = Build.from_json(json)
# print the JSON string representation of the object
print(Build.to_json())

# convert the object into a dict
build_dict = build_instance.to_dict()
# create an instance of Build from a dict
build_from_dict = Build.from_dict(build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


