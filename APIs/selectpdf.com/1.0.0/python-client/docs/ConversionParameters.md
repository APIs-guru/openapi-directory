# ConversionParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | An optional base url parameter can be used together with html to resolve relative paths from the html string | [optional] 
**html** | **str** | The raw html string that will be converted to PDF | [optional] 
**key** | **str** | The license key required to use the API | 
**margin_bottom** | **int** | Bottom margin of the generated PDF document in points (1 point &#x3D; 1/72 inch) | [optional] 
**margin_left** | **int** | Left margin of the generated PDF document in points (1 point &#x3D; 1/72 inch) | [optional] 
**margin_right** | **int** | Right margin of the generated PDF document in points (1 point &#x3D; 1/72 inch) | [optional] 
**margin_top** | **int** | Top margin of the generated PDF document in points (1 point &#x3D; 1/72 inch) | [optional] 
**page_orientation** | **str** | Specifies the page orientation of the generated pdf document | [optional] [default to 'Portrait']
**page_size** | **str** | Specifies the page size of the generated pdf document | [optional] [default to 'A4']
**url** | **str** | The url that will be converted to PDF | [optional] 

## Example

```python
from openapi_client.models.conversion_parameters import ConversionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConversionParameters from a JSON string
conversion_parameters_instance = ConversionParameters.from_json(json)
# print the JSON string representation of the object
print(ConversionParameters.to_json())

# convert the object into a dict
conversion_parameters_dict = conversion_parameters_instance.to_dict()
# create an instance of ConversionParameters from a dict
conversion_parameters_from_dict = ConversionParameters.from_dict(conversion_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


