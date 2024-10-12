# NestedManufacturer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devicetype_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_manufacturer import NestedManufacturer

# TODO update the JSON string below
json = "{}"
# create an instance of NestedManufacturer from a JSON string
nested_manufacturer_instance = NestedManufacturer.from_json(json)
# print the JSON string representation of the object
print(NestedManufacturer.to_json())

# convert the object into a dict
nested_manufacturer_dict = nested_manufacturer_instance.to_dict()
# create an instance of NestedManufacturer from a dict
nested_manufacturer_from_dict = NestedManufacturer.from_dict(nested_manufacturer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


