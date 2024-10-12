# UpdateSlicerSpecRequest

Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;SlicerSpec&#x60; is implied and should not be specified. A single \&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**slicer_id** | **int** | The id of the slicer to update. | [optional] 
**spec** | [**SlicerSpec**](SlicerSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_slicer_spec_request import UpdateSlicerSpecRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSlicerSpecRequest from a JSON string
update_slicer_spec_request_instance = UpdateSlicerSpecRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSlicerSpecRequest.to_json())

# convert the object into a dict
update_slicer_spec_request_dict = update_slicer_spec_request_instance.to_dict()
# create an instance of UpdateSlicerSpecRequest from a dict
update_slicer_spec_request_from_dict = UpdateSlicerSpecRequest.from_dict(update_slicer_spec_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


