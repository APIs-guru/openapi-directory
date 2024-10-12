# ProfileResourceFormat

The profile resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProfileTypeDefinition**](ProfileTypeDefinition.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.profile_resource_format import ProfileResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileResourceFormat from a JSON string
profile_resource_format_instance = ProfileResourceFormat.from_json(json)
# print the JSON string representation of the object
print(ProfileResourceFormat.to_json())

# convert the object into a dict
profile_resource_format_dict = profile_resource_format_instance.to_dict()
# create an instance of ProfileResourceFormat from a dict
profile_resource_format_from_dict = ProfileResourceFormat.from_dict(profile_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


