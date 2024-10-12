# UpdateTextStyleRequest

Update the styling of text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;text_style&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example, to update the text style to bold, set &#x60;fields&#x60; to &#x60;\&quot;bold\&quot;&#x60;. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. | [optional] 
**range** | [**Range**](Range.md) |  | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_text_style_request import UpdateTextStyleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTextStyleRequest from a JSON string
update_text_style_request_instance = UpdateTextStyleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTextStyleRequest.to_json())

# convert the object into a dict
update_text_style_request_dict = update_text_style_request_instance.to_dict()
# create an instance of UpdateTextStyleRequest from a dict
update_text_style_request_from_dict = UpdateTextStyleRequest.from_dict(update_text_style_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


