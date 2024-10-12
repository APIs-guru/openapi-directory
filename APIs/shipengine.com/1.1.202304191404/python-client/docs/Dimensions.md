# Dimensions

The dimensions of a package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **float** | The length of the package, in the specified unit | [default to 0]
**length** | **float** | The length of the package, in the specified unit | [default to 0]
**unit** | [**DimensionUnit**](DimensionUnit.md) |  | 
**width** | **float** | The width of the package, in the specified unit | [default to 0]

## Example

```python
from openapi_client.models.dimensions import Dimensions

# TODO update the JSON string below
json = "{}"
# create an instance of Dimensions from a JSON string
dimensions_instance = Dimensions.from_json(json)
# print the JSON string representation of the object
print(Dimensions.to_json())

# convert the object into a dict
dimensions_dict = dimensions_instance.to_dict()
# create an instance of Dimensions from a dict
dimensions_from_dict = Dimensions.from_dict(dimensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


