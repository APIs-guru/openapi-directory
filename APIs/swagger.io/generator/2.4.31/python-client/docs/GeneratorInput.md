# GeneratorInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_value** | [**AuthorizationValue**](AuthorizationValue.md) |  | [optional] 
**options** | **Dict[str, str]** |  | [optional] 
**security_definition** | [**SecuritySchemeDefinition**](SecuritySchemeDefinition.md) |  | [optional] 
**spec** | **object** |  | [optional] 
**swagger_url** | **str** |  | [optional] 
**using_flatten_spec** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.generator_input import GeneratorInput

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratorInput from a JSON string
generator_input_instance = GeneratorInput.from_json(json)
# print the JSON string representation of the object
print(GeneratorInput.to_json())

# convert the object into a dict
generator_input_dict = generator_input_instance.to_dict()
# create an instance of GeneratorInput from a dict
generator_input_from_dict = GeneratorInput.from_dict(generator_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


