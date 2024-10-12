# PortionSize

Serving portion size of a food dish.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **int** | Required. Number of the portion. | [optional] 
**unit** | [**List[MenuLabel]**](MenuLabel.md) | Required. The repeated name_info field is for the unit in multiple languages. | [optional] 

## Example

```python
from openapi_client.models.portion_size import PortionSize

# TODO update the JSON string below
json = "{}"
# create an instance of PortionSize from a JSON string
portion_size_instance = PortionSize.from_json(json)
# print the JSON string representation of the object
print(PortionSize.to_json())

# convert the object into a dict
portion_size_dict = portion_size_instance.to_dict()
# create an instance of PortionSize from a dict
portion_size_from_dict = PortionSize.from_dict(portion_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


