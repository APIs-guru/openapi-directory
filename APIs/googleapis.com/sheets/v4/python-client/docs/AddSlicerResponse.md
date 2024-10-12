# AddSlicerResponse

The result of adding a slicer to a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slicer** | [**Slicer**](Slicer.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_slicer_response import AddSlicerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddSlicerResponse from a JSON string
add_slicer_response_instance = AddSlicerResponse.from_json(json)
# print the JSON string representation of the object
print(AddSlicerResponse.to_json())

# convert the object into a dict
add_slicer_response_dict = add_slicer_response_instance.to_dict()
# create an instance of AddSlicerResponse from a dict
add_slicer_response_from_dict = AddSlicerResponse.from_dict(add_slicer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


