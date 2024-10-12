# SwaggerExternalDocumentation

The swagger external documentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The document description. | [optional] 
**extensions** | **Dict[str, object]** | The vendor extensions. | [optional] 
**uri** | **str** | The documentation Uri. | [optional] 

## Example

```python
from openapi_client.models.swagger_external_documentation import SwaggerExternalDocumentation

# TODO update the JSON string below
json = "{}"
# create an instance of SwaggerExternalDocumentation from a JSON string
swagger_external_documentation_instance = SwaggerExternalDocumentation.from_json(json)
# print the JSON string representation of the object
print(SwaggerExternalDocumentation.to_json())

# convert the object into a dict
swagger_external_documentation_dict = swagger_external_documentation_instance.to_dict()
# create an instance of SwaggerExternalDocumentation from a dict
swagger_external_documentation_from_dict = SwaggerExternalDocumentation.from_dict(swagger_external_documentation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


