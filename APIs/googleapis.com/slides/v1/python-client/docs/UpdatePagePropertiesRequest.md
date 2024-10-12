# UpdatePagePropertiesRequest

Updates the properties of a Page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;pageProperties&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the page background solid fill color, set &#x60;fields&#x60; to &#x60;\&quot;pageBackgroundFill.solidFill.color\&quot;&#x60;. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. | [optional] 
**object_id** | **str** | The object ID of the page the update is applied to. | [optional] 
**page_properties** | [**PageProperties**](PageProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_page_properties_request import UpdatePagePropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePagePropertiesRequest from a JSON string
update_page_properties_request_instance = UpdatePagePropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePagePropertiesRequest.to_json())

# convert the object into a dict
update_page_properties_request_dict = update_page_properties_request_instance.to_dict()
# create an instance of UpdatePagePropertiesRequest from a dict
update_page_properties_request_from_dict = UpdatePagePropertiesRequest.from_dict(update_page_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


