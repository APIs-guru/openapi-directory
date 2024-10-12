# UpdateLinePropertiesRequest

Updates the properties of a Line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;lineProperties&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the line solid fill color, set &#x60;fields&#x60; to &#x60;\&quot;lineFill.solidFill.color\&quot;&#x60;. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. | [optional] 
**line_properties** | [**LineProperties**](LineProperties.md) |  | [optional] 
**object_id** | **str** | The object ID of the line the update is applied to. | [optional] 

## Example

```python
from openapi_client.models.update_line_properties_request import UpdateLinePropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateLinePropertiesRequest from a JSON string
update_line_properties_request_instance = UpdateLinePropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateLinePropertiesRequest.to_json())

# convert the object into a dict
update_line_properties_request_dict = update_line_properties_request_instance.to_dict()
# create an instance of UpdateLinePropertiesRequest from a dict
update_line_properties_request_from_dict = UpdateLinePropertiesRequest.from_dict(update_line_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


