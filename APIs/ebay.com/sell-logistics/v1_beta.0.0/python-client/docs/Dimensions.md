# Dimensions

This complex type defines the dimensions of a package to be shipped.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **str** | The numeric value of the height of the package. | [optional] 
**length** | **str** | The numeric value of the length of the package. | [optional] 
**unit** | **str** | The unit of measure used to express the height, length, and width of the package. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/logistics/types/api:LengthUnitOfMeasureEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**width** | **str** | The numeric value of the width of the package. | [optional] 

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


