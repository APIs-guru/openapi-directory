# Line

A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_category** | **str** | The category of the line. It matches the &#x60;category&#x60; specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest. | [optional] 
**line_properties** | [**LineProperties**](LineProperties.md) |  | [optional] 
**line_type** | **str** | The type of the line. | [optional] 

## Example

```python
from openapi_client.models.line import Line

# TODO update the JSON string below
json = "{}"
# create an instance of Line from a JSON string
line_instance = Line.from_json(json)
# print the JSON string representation of the object
print(Line.to_json())

# convert the object into a dict
line_dict = line_instance.to_dict()
# create an instance of Line from a dict
line_from_dict = Line.from_dict(line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


