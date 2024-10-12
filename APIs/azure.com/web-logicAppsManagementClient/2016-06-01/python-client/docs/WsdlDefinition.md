# WsdlDefinition

The WSDL definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The WSDL content | [optional] 
**import_method** | [**WsdlImportMethod**](WsdlImportMethod.md) |  | [optional] 
**service** | [**WsdlService**](WsdlService.md) |  | [optional] 
**url** | **str** | The WSDL URL | [optional] 

## Example

```python
from openapi_client.models.wsdl_definition import WsdlDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of WsdlDefinition from a JSON string
wsdl_definition_instance = WsdlDefinition.from_json(json)
# print the JSON string representation of the object
print(WsdlDefinition.to_json())

# convert the object into a dict
wsdl_definition_dict = wsdl_definition_instance.to_dict()
# create an instance of WsdlDefinition from a dict
wsdl_definition_from_dict = WsdlDefinition.from_dict(wsdl_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


