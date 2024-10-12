# CreativeDimensions

The dimensions of a creative. This applies to only HTML and Native creatives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **str** | The height of the creative in pixels. | [optional] 
**width** | **str** | The width of the creative in pixels. | [optional] 

## Example

```python
from openapi_client.models.creative_dimensions import CreativeDimensions

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeDimensions from a JSON string
creative_dimensions_instance = CreativeDimensions.from_json(json)
# print the JSON string representation of the object
print(CreativeDimensions.to_json())

# convert the object into a dict
creative_dimensions_dict = creative_dimensions_instance.to_dict()
# create an instance of CreativeDimensions from a dict
creative_dimensions_from_dict = CreativeDimensions.from_dict(creative_dimensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


