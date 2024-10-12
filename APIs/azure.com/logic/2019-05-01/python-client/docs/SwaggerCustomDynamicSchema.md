# SwaggerCustomDynamicSchema

The swagger custom dynamic schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | The operation id to fetch dynamic schema. | [optional] 
**parameters** | **Dict[str, object]** | The operation parameters. | [optional] 
**value_path** | **str** | Json pointer to the dynamic schema on the response body. | [optional] 

## Example

```python
from openapi_client.models.swagger_custom_dynamic_schema import SwaggerCustomDynamicSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerCustomDynamicSchema from a JSON string
swagger_custom_dynamic_schema_instance = SwaggerCustomDynamicSchema.from_json(json)
# print the JSON string representation of the object
print(SwaggerCustomDynamicSchema.to_json())

# convert the object into a dict
swagger_custom_dynamic_schema_dict = swagger_custom_dynamic_schema_instance.to_dict()
# create an instance of SwaggerCustomDynamicSchema from a dict
swagger_custom_dynamic_schema_from_dict = SwaggerCustomDynamicSchema.from_dict(swagger_custom_dynamic_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


