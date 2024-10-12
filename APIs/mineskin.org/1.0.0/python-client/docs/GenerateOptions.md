# GenerateOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** |  | [optional] [default to 'steve']
**name** | **str** |  | [optional] 
**variant** | **str** | Skin variant - automatically determined based on the image if not specified | [optional] 
**visibility** | **int** | Visibility of the generated skin. 0 for public, 1 for private | [optional] [default to 0]

## Example

```python
from openapi_client.models.generate_options import GenerateOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateOptions from a JSON string
generate_options_instance = GenerateOptions.from_json(json)
# print the JSON string representation of the object
print(GenerateOptions.to_json())

# convert the object into a dict
generate_options_dict = generate_options_instance.to_dict()
# create an instance of GenerateOptions from a dict
generate_options_from_dict = GenerateOptions.from_dict(generate_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


