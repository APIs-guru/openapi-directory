# TextRotation

The rotation applied to text in a cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **int** | The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction | [optional] 
**vertical** | **bool** | If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l | | [optional] 

## Example

```python
from openapi_client.models.text_rotation import TextRotation

# TODO update the JSON string below
json = "{}"
# create an instance of TextRotation from a JSON string
text_rotation_instance = TextRotation.from_json(json)
# print the JSON string representation of the object
print(TextRotation.to_json())

# convert the object into a dict
text_rotation_dict = text_rotation_instance.to_dict()
# create an instance of TextRotation from a dict
text_rotation_from_dict = TextRotation.from_dict(text_rotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


