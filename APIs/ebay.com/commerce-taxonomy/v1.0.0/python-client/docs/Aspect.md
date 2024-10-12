# Aspect

This type contains information about an item attribute (for example, color) that is appropriate or necessary for accurately describing items in a particular leaf category. Sellers are required or encouraged to provide one or more values of this aspect when offering an item in that category on eBay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_constraint** | [**AspectConstraint**](AspectConstraint.md) |  | [optional] 
**aspect_values** | [**List[AspectValue]**](AspectValue.md) | A list of valid values for this aspect (for example: Red, Green, and Blue), along with any constraints on those values. | [optional] 
**localized_aspect_name** | **str** | The localized name of this aspect (for example: Colour on the eBay UK site). Note: This name is always localized for the specified marketplace. | [optional] 
**relevance_indicator** | [**RelevanceIndicator**](RelevanceIndicator.md) |  | [optional] 

## Example

```python
from openapi_client.models.aspect import Aspect

# TODO update the JSON string below
json = "{}"
# create an instance of Aspect from a JSON string
aspect_instance = Aspect.from_json(json)
# print the JSON string representation of the object
print(Aspect.to_json())

# convert the object into a dict
aspect_dict = aspect_instance.to_dict()
# create an instance of Aspect from a dict
aspect_from_dict = Aspect.from_dict(aspect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


