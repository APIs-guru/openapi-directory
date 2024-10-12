# KeyValueElement

Information about the extracted key or value in a key-value pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **List[float]** | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. | [optional] 
**elements** | **List[str]** | When includeTextDetails is set to true, a list of references to the text elements constituting this key or value. | [optional] 
**text** | **str** | The text content of the key or value. | 

## Example

```python
from openapi_client.models.key_value_element import KeyValueElement

# TODO update the JSON string below
json = "{}"
# create an instance of KeyValueElement from a JSON string
key_value_element_instance = KeyValueElement.from_json(json)
# print the JSON string representation of the object
print(KeyValueElement.to_json())

# convert the object into a dict
key_value_element_dict = key_value_element_instance.to_dict()
# create an instance of KeyValueElement from a dict
key_value_element_from_dict = KeyValueElement.from_dict(key_value_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


