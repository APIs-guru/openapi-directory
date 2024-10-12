# FieldValue

Recognized field value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **List[float]** | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. | [optional] 
**confidence** | **float** | Confidence value. | [optional] 
**elements** | **List[str]** | When includeTextDetails is set to true, a list of references to the text elements constituting this field. | [optional] 
**page** | **int** | The 1-based page number in the input document. | [optional] 
**text** | **str** | Text content of the extracted field. | [optional] 
**type** | [**FieldValueType**](FieldValueType.md) |  | 
**value_array** | [**List[FieldValue]**](FieldValue.md) | Array of field values. | [optional] 
**value_date** | **datetime** | Date value. | [optional] 
**value_integer** | **int** | Integer value. | [optional] 
**value_number** | **float** | Floating point value. | [optional] 
**value_object** | [**Dict[str, FieldValue]**](FieldValue.md) | Dictionary of named field values. | [optional] 
**value_phone_number** | **str** | Phone number value. | [optional] 
**value_string** | **str** | String value. | [optional] 
**value_time** | **datetime** | Time value. | [optional] 

## Example

```python
from openapi_client.models.field_value import FieldValue

# TODO update the JSON string below
json = "{}"
# create an instance of FieldValue from a JSON string
field_value_instance = FieldValue.from_json(json)
# print the JSON string representation of the object
print(FieldValue.to_json())

# convert the object into a dict
field_value_dict = field_value_instance.to_dict()
# create an instance of FieldValue from a dict
field_value_from_dict = FieldValue.from_dict(field_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


