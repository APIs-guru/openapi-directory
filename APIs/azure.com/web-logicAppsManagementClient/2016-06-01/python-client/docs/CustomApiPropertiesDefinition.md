# CustomApiPropertiesDefinition

Custom API properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_definitions** | [**ApiResourceDefinitions**](ApiResourceDefinitions.md) |  | [optional] 
**api_type** | [**ApiType**](ApiType.md) |  | [optional] 
**backend_service** | [**ApiResourceBackendService**](ApiResourceBackendService.md) |  | [optional] 
**brand_color** | **str** | Brand color | [optional] 
**capabilities** | **List[str]** | The custom API capabilities | [optional] 
**connection_parameters** | [**Dict[str, ConnectionParameter]**](ConnectionParameter.md) | Connection parameters | [optional] 
**description** | **str** | The custom API description | [optional] 
**display_name** | **str** | The display name | [optional] 
**icon_uri** | **str** | The icon URI | [optional] 
**runtime_urls** | **List[str]** | Runtime URLs | [optional] 
**swagger** | **object** | The JSON representation of the swagger | [optional] 
**wsdl_definition** | [**WsdlDefinition**](WsdlDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_api_properties_definition import CustomApiPropertiesDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CustomApiPropertiesDefinition from a JSON string
custom_api_properties_definition_instance = CustomApiPropertiesDefinition.from_json(json)
# print the JSON string representation of the object
print(CustomApiPropertiesDefinition.to_json())

# convert the object into a dict
custom_api_properties_definition_dict = custom_api_properties_definition_instance.to_dict()
# create an instance of CustomApiPropertiesDefinition from a dict
custom_api_properties_definition_from_dict = CustomApiPropertiesDefinition.from_dict(custom_api_properties_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


