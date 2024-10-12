# SwaggerCustomDynamicProperties

The swagger custom dynamic properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | The operation id to fetch dynamic schema. | [optional] 
**parameters** | [**Dict[str, SwaggerCustomDynamicProperties]**](SwaggerCustomDynamicProperties.md) | The operation parameters. | [optional] 
**value_path** | **str** | Json pointer to the dynamic schema on the response body. | [optional] 

## Example

```python
from openapi_client.models.swagger_custom_dynamic_properties import SwaggerCustomDynamicProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerCustomDynamicProperties from a JSON string
swagger_custom_dynamic_properties_instance = SwaggerCustomDynamicProperties.from_json(json)
# print the JSON string representation of the object
print(SwaggerCustomDynamicProperties.to_json())

# convert the object into a dict
swagger_custom_dynamic_properties_dict = swagger_custom_dynamic_properties_instance.to_dict()
# create an instance of SwaggerCustomDynamicProperties from a dict
swagger_custom_dynamic_properties_from_dict = SwaggerCustomDynamicProperties.from_dict(swagger_custom_dynamic_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


