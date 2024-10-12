# SwaggerSchema

The swagger schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | **object** |  | [optional] 
**all_of** | [**List[SwaggerSchema]**](SwaggerSchema.md) | The schemas which must pass validation when this schema is used. | [optional] 
**discriminator** | **str** | The discriminator. | [optional] 
**dynamic_list_new** | [**SwaggerCustomDynamicList**](SwaggerCustomDynamicList.md) |  | [optional] 
**dynamic_schema_new** | [**SwaggerCustomDynamicProperties**](SwaggerCustomDynamicProperties.md) |  | [optional] 
**dynamic_schema_old** | [**SwaggerCustomDynamicSchema**](SwaggerCustomDynamicSchema.md) |  | [optional] 
**dynamic_tree** | [**SwaggerCustomDynamicTree**](SwaggerCustomDynamicTree.md) |  | [optional] 
**example** | **object** |  | [optional] 
**external_docs** | [**SwaggerExternalDocumentation**](SwaggerExternalDocumentation.md) |  | [optional] 
**items** | [**SwaggerSchema**](SwaggerSchema.md) |  | [optional] 
**max_properties** | **int** | The maximum number of allowed properties. | [optional] 
**min_properties** | **int** | The minimum number of allowed properties. | [optional] 
**notification_url_extension** | **bool** | Indicates the notification url extension. If this is set, the property&#39;s value should be a callback url for a webhook. | [optional] 
**properties** | [**Dict[str, SwaggerSchema]**](SwaggerSchema.md) | The object properties | [optional] 
**read_only** | **bool** | Indicates whether this property must be present in the a request. | [optional] 
**ref** | **str** | The reference. | [optional] 
**required** | **List[str]** | The object required properties. | [optional] 
**title** | **str** | The title. | [optional] 
**type** | [**SwaggerSchemaType**](SwaggerSchemaType.md) |  | [optional] 
**xml** | [**SwaggerXml**](SwaggerXml.md) |  | [optional] 

## Example

```python
from openapi_client.models.swagger_schema import SwaggerSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerSchema from a JSON string
swagger_schema_instance = SwaggerSchema.from_json(json)
# print the JSON string representation of the object
print(SwaggerSchema.to_json())

# convert the object into a dict
swagger_schema_dict = swagger_schema_instance.to_dict()
# create an instance of SwaggerSchema from a dict
swagger_schema_from_dict = SwaggerSchema.from_dict(swagger_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


