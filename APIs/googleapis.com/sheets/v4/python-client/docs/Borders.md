# Borders

The borders of the cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom** | [**Border**](Border.md) |  | [optional] 
**left** | [**Border**](Border.md) |  | [optional] 
**right** | [**Border**](Border.md) |  | [optional] 
**top** | [**Border**](Border.md) |  | [optional] 

## Example

```python
from openapi_client.models.borders import Borders

# TODO update the JSON string below
json = "{}"
# create an instance of Borders from a JSON string
borders_instance = Borders.from_json(json)
# print the JSON string representation of the object
print(Borders.to_json())

# convert the object into a dict
borders_dict = borders_instance.to_dict()
# create an instance of Borders from a dict
borders_from_dict = Borders.from_dict(borders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


