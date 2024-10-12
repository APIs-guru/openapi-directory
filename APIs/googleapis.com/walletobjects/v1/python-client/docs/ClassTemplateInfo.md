# ClassTemplateInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_barcode_section_details** | [**CardBarcodeSectionDetails**](CardBarcodeSectionDetails.md) |  | [optional] 
**card_template_override** | [**CardTemplateOverride**](CardTemplateOverride.md) |  | [optional] 
**details_template_override** | [**DetailsTemplateOverride**](DetailsTemplateOverride.md) |  | [optional] 
**list_template_override** | [**ListTemplateOverride**](ListTemplateOverride.md) |  | [optional] 

## Example

```python
from openapi_client.models.class_template_info import ClassTemplateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ClassTemplateInfo from a JSON string
class_template_info_instance = ClassTemplateInfo.from_json(json)
# print the JSON string representation of the object
print(ClassTemplateInfo.to_json())

# convert the object into a dict
class_template_info_dict = class_template_info_instance.to_dict()
# create an instance of ClassTemplateInfo from a dict
class_template_info_from_dict = ClassTemplateInfo.from_dict(class_template_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


