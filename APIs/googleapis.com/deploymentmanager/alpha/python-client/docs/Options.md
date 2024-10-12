# Options

Options allows customized resource handling by Deployment Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**async_options** | [**List[AsyncOptions]**](AsyncOptions.md) | Options regarding how to thread async requests. | [optional] 
**input_mappings** | [**List[InputMapping]**](InputMapping.md) | The mappings that apply for requests. | [optional] 
**name_property** | **str** | The json path to the field in the resource JSON body into which the resource name should be mapped. Leaving this empty indicates that there should be no mapping performed. | [optional] 
**validation_options** | [**ValidationOptions**](ValidationOptions.md) |  | [optional] 

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


