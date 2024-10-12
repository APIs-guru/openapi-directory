# Options


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_border** | **str** | Color for the border of elements within the iFrame. Value should be a CSS hex color, e.g. \&quot;#FF9900\&quot; | [optional] 
**color_border_selected** | **str** | Color for the border of elements within the iFrame when selected by the customer. Value should be a CSS hex color, e.g. \&quot;#FF9900\&quot; | [optional] 
**color_details** | **str** | Color for the bullet points within the iFrame. Value should be a CSS hex color, e.g. \&quot;#FF9900\&quot; | [optional] 
**color_text** | **str** | Color for the texts within the iFrame. Value should be a CSS hex color, e.g. \&quot;#FF9900\&quot; | [optional] 
**radius_border** | **str** | Radius for the border of elements within the iFrame. | [optional] 

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


