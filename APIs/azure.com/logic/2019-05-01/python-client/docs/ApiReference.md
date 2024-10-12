# ApiReference

The Api reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_color** | **str** | The brand color of the api. | [optional] 
**category** | [**ApiTier**](ApiTier.md) |  | [optional] 
**description** | **str** | The description of the api. | [optional] 
**display_name** | **str** | The display name of the api. | [optional] 
**icon_uri** | **str** | The icon uri of the api. | [optional] 
**integration_service_environment** | [**ResourceReference**](ResourceReference.md) |  | [optional] 
**swagger** | **object** |  | [optional] 
**id** | **str** | The resource id. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

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


