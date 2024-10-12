# UpdateEmbeddedObjectBorderRequest

Updates an embedded object's border property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**border** | [**EmbeddedObjectBorder**](EmbeddedObjectBorder.md) |  | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;border&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**object_id** | **int** | The ID of the embedded object to update. | [optional] 

## Example

```python
from openapi_client.models.update_embedded_object_border_request import UpdateEmbeddedObjectBorderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEmbeddedObjectBorderRequest from a JSON string
update_embedded_object_border_request_instance = UpdateEmbeddedObjectBorderRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateEmbeddedObjectBorderRequest.to_json())

# convert the object into a dict
update_embedded_object_border_request_dict = update_embedded_object_border_request_instance.to_dict()
# create an instance of UpdateEmbeddedObjectBorderRequest from a dict
update_embedded_object_border_request_from_dict = UpdateEmbeddedObjectBorderRequest.from_dict(update_embedded_object_border_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


