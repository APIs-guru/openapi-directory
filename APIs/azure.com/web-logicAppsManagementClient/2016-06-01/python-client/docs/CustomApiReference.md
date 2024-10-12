# CustomApiReference

The custom API reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**brand_color** | **str** | Brand color | [optional] 
**description** | **str** | The custom API description | [optional] 
**display_name** | **str** | The display name | [optional] 
**icon_uri** | **str** | The icon URI | [optional] 
**swagger** | **object** | The JSON representation of the swagger | [optional] 
**id** | **str** | Resource reference id | [optional] 
**type** | **str** | Resource reference type | [optional] 

## Example

```python
from openapi_client.models.custom_api_reference import CustomApiReference

# TODO update the JSON string below
json = "{}"
# create an instance of CustomApiReference from a JSON string
custom_api_reference_instance = CustomApiReference.from_json(json)
# print the JSON string representation of the object
print(CustomApiReference.to_json())

# convert the object into a dict
custom_api_reference_dict = custom_api_reference_instance.to_dict()
# create an instance of CustomApiReference from a dict
custom_api_reference_from_dict = CustomApiReference.from_dict(custom_api_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


