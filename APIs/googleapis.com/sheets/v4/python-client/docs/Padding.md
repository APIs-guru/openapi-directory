# Padding

The amount of padding around the cell, in pixels. When updating padding, every field must be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom** | **int** | The bottom padding of the cell. | [optional] 
**left** | **int** | The left padding of the cell. | [optional] 
**right** | **int** | The right padding of the cell. | [optional] 
**top** | **int** | The top padding of the cell. | [optional] 

## Example

```python
from openapi_client.models.padding import Padding

# TODO update the JSON string below
json = "{}"
# create an instance of Padding from a JSON string
padding_instance = Padding.from_json(json)
# print the JSON string representation of the object
print(Padding.to_json())

# convert the object into a dict
padding_dict = padding_instance.to_dict()
# create an instance of Padding from a dict
padding_from_dict = Padding.from_dict(padding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


