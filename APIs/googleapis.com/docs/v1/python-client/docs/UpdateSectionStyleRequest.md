# UpdateSectionStyleRequest

Updates the SectionStyle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;section_style&#x60; is implied and must not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the left margin, set &#x60;fields&#x60; to &#x60;\&quot;margin_left\&quot;&#x60;. | [optional] 
**range** | [**Range**](Range.md) |  | [optional] 
**section_style** | [**SectionStyle**](SectionStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_section_style_request import UpdateSectionStyleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSectionStyleRequest from a JSON string
update_section_style_request_instance = UpdateSectionStyleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSectionStyleRequest.to_json())

# convert the object into a dict
update_section_style_request_dict = update_section_style_request_instance.to_dict()
# create an instance of UpdateSectionStyleRequest from a dict
update_section_style_request_from_dict = UpdateSectionStyleRequest.from_dict(update_section_style_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


