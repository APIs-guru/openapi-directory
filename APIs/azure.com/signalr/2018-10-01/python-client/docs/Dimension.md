# Dimension

Specifications of the Dimension of metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Localized friendly display name of the dimension. | [optional] 
**internal_name** | **str** | Name of the dimension as it appears in MDM. | [optional] 
**name** | **str** | The public facing name of the dimension. | [optional] 
**to_be_exported_for_shoebox** | **bool** | A Boolean flag indicating whether this dimension should be included for the shoebox export scenario. | [optional] 

## Example

```python
from openapi_client.models.dimension import Dimension

# TODO update the JSON string below
json = "{}"
# create an instance of Dimension from a JSON string
dimension_instance = Dimension.from_json(json)
# print the JSON string representation of the object
print(Dimension.to_json())

# convert the object into a dict
dimension_dict = dimension_instance.to_dict()
# create an instance of Dimension from a dict
dimension_from_dict = Dimension.from_dict(dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


