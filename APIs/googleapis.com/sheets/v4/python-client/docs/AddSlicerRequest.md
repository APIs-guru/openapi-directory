# AddSlicerRequest

Adds a slicer to a sheet in the spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slicer** | [**Slicer**](Slicer.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_slicer_request import AddSlicerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddSlicerRequest from a JSON string
add_slicer_request_instance = AddSlicerRequest.from_json(json)
# print the JSON string representation of the object
print(AddSlicerRequest.to_json())

# convert the object into a dict
add_slicer_request_dict = add_slicer_request_instance.to_dict()
# create an instance of AddSlicerRequest from a dict
add_slicer_request_from_dict = AddSlicerRequest.from_dict(add_slicer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


