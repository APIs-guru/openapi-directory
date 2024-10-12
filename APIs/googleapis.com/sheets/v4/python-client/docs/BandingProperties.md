# BandingProperties

Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_band_color** | [**Color**](Color.md) |  | [optional] 
**first_band_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**footer_color** | [**Color**](Color.md) |  | [optional] 
**footer_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**header_color** | [**Color**](Color.md) |  | [optional] 
**header_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**second_band_color** | [**Color**](Color.md) |  | [optional] 
**second_band_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.banding_properties import BandingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BandingProperties from a JSON string
banding_properties_instance = BandingProperties.from_json(json)
# print the JSON string representation of the object
print(BandingProperties.to_json())

# convert the object into a dict
banding_properties_dict = banding_properties_instance.to_dict()
# create an instance of BandingProperties from a dict
banding_properties_from_dict = BandingProperties.from_dict(banding_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


