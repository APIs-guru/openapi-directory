# ApiReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_color** | **str** | Brand color | [optional] 
**description** | **str** | The custom API description | [optional] 
**display_name** | **str** | The display name | [optional] 
**icon_uri** | **str** | The icon URI | [optional] 
**name** | **str** | The name of the API | [optional] 
**swagger** | **object** | The JSON representation of the swagger | [optional] 
**id** | **str** | Resource reference id | [optional] 
**type** | **str** | Resource reference type | [optional] 

## Example

```python
from openapi_client.models.api_reference import ApiReference

# TODO update the JSON string below
json = "{}"
# create an instance of ApiReference from a JSON string
api_reference_instance = ApiReference.from_json(json)
# print the JSON string representation of the object
print(ApiReference.to_json())

# convert the object into a dict
api_reference_dict = api_reference_instance.to_dict()
# create an instance of ApiReference from a dict
api_reference_from_dict = ApiReference.from_dict(api_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


