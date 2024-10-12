# ConvertResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_type** | **str** | The type of the value being converted from | 
**from_value** | **str** | The value being converted from | 
**result** | **str** | The result of the conversion in string format | 
**result_float** | **float** | The result of the conversion as a floating-point number | 
**to_type** | **str** | The type being converted to | 
**valid** | **bool** | True if the conversion was successful and produced a valid result | 

## Example

```python
from openapi_client.models.convert_response import ConvertResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertResponse from a JSON string
convert_response_instance = ConvertResponse.from_json(json)
# print the JSON string representation of the object
print(ConvertResponse.to_json())

# convert the object into a dict
convert_response_dict = convert_response_instance.to_dict()
# create an instance of ConvertResponse from a dict
convert_response_from_dict = ConvertResponse.from_dict(convert_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


