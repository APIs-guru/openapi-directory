# Slicer

A slicer in a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | [**EmbeddedObjectPosition**](EmbeddedObjectPosition.md) |  | [optional] 
**slicer_id** | **int** | The ID of the slicer. | [optional] 
**spec** | [**SlicerSpec**](SlicerSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.slicer import Slicer

# TODO update the JSON string below
json = "{}"
# create an instance of Slicer from a JSON string
slicer_instance = Slicer.from_json(json)
# print the JSON string representation of the object
print(Slicer.to_json())

# convert the object into a dict
slicer_dict = slicer_instance.to_dict()
# create an instance of Slicer from a dict
slicer_from_dict = Slicer.from_dict(slicer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


