# ApiOperationPropertiesDefinition

The api operations properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation** | [**ApiOperationAnnotation**](ApiOperationAnnotation.md) |  | [optional] 
**api** | [**ApiReference**](ApiReference.md) |  | [optional] 
**description** | **str** | The description of the api operation. | [optional] 
**inputs_definition** | [**SwaggerSchema**](SwaggerSchema.md) |  | [optional] 
**is_notification** | **bool** | Indicates whether the API operation is notification or not. | [optional] 
**is_webhook** | **bool** | Indicates whether the API operation is webhook or not. | [optional] 
**pageable** | **bool** | Indicates whether the api operation is pageable. | [optional] 
**responses_definition** | [**Dict[str, SwaggerSchema]**](SwaggerSchema.md) | The operation responses definition schemas. | [optional] 
**summary** | **str** | The summary of the api operation. | [optional] 
**trigger** | **str** | The trigger type of api operation. | [optional] 
**trigger_hint** | **str** | The trigger hint for the api operation. | [optional] 
**visibility** | **str** | The visibility of the api operation. | [optional] 

## Example

```python
from openapi_client.models.api_operation_properties_definition import ApiOperationPropertiesDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationPropertiesDefinition from a JSON string
api_operation_properties_definition_instance = ApiOperationPropertiesDefinition.from_json(json)
# print the JSON string representation of the object
print(ApiOperationPropertiesDefinition.to_json())

# convert the object into a dict
api_operation_properties_definition_dict = api_operation_properties_definition_instance.to_dict()
# create an instance of ApiOperationPropertiesDefinition from a dict
api_operation_properties_definition_from_dict = ApiOperationPropertiesDefinition.from_dict(api_operation_properties_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


