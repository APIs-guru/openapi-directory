# Dimensions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Product height in millimeters. No commas or periods are accepeted. For example one meter produc must be informed as 1000. Another example 1 meter and 23 centimeters should be informed solely as 1230 | 
**length** | **int** | Product length in millimeters. No commas or periods are accepeted. For example one meter produc must be informed as 1000. Another example 1 meter and 23 centimeters should be informed solely as 1230 | 
**weight** | **int** | Product weight in Grams. No commas or periods are accepeted. For example one killo must be informed as 1000. Another example 1 Kilo and 234 grams should be informed solely as 1234 | 
**width** | **int** | Product width in millimeters. No commas or periods are accepeted. For example one meter produc must be informed as 1000. Another example 1 meter and 23 centimeters should be informed solely as 1230 | 

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


