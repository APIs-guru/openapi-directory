# Options

Options allows customized resource handling by Deployment Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**async_options** | [**List[AsyncOptions]**](AsyncOptions.md) | Options regarding how to thread async requests. | [optional] 
**input_mappings** | [**List[InputMapping]**](InputMapping.md) | The mappings that apply for requests. | [optional] 
**validation_options** | [**ValidationOptions**](ValidationOptions.md) |  | [optional] 
**virtual_properties** | **str** | Additional properties block described as a jsonSchema, these properties will never be part of the json payload, but they can be consumed by InputMappings, this must be a valid json schema draft-04. The properties specified here will be decouple in a different section. This schema will be merged to the schema validation, and properties here will be extracted From the payload and consumed explicitly by InputMappings. ex: field1: type: string field2: type: number | [optional] 

## Example

```python
from openapi_client.models.options import Options

# TODO update the JSON string below
json = "{}"
# create an instance of Options from a JSON string
options_instance = Options.from_json(json)
# print the JSON string representation of the object
print(Options.to_json())

# convert the object into a dict
options_dict = options_instance.to_dict()
# create an instance of Options from a dict
options_from_dict = Options.from_dict(options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


