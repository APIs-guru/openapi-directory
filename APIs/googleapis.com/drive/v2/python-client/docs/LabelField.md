# LabelField

Representation of field, which is a typed key-value pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_string** | **List[date]** | Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD. | [optional] 
**id** | **str** | The identifier of this label field. | [optional] 
**integer** | **List[str]** | Only present if &#x60;valueType&#x60; is &#x60;integer&#x60;. | [optional] 
**kind** | **str** | This is always &#x60;drive#labelField&#x60;. | [optional] [default to 'drive#labelField']
**selection** | **List[str]** | Only present if &#x60;valueType&#x60; is &#x60;selection&#x60; | [optional] 
**text** | **List[str]** | Only present if &#x60;valueType&#x60; is &#x60;text&#x60;. | [optional] 
**user** | [**List[User]**](User.md) | Only present if &#x60;valueType&#x60; is &#x60;user&#x60;. | [optional] 
**value_type** | **str** | The field type. While new values may be supported in the future, the following are currently allowed: * &#x60;dateString&#x60; * &#x60;integer&#x60; * &#x60;selection&#x60; * &#x60;text&#x60; * &#x60;user&#x60; | [optional] 

## Example

```python
from openapi_client.models.label_field import LabelField

# TODO update the JSON string below
json = "{}"
# create an instance of LabelField from a JSON string
label_field_instance = LabelField.from_json(json)
# print the JSON string representation of the object
print(LabelField.to_json())

# convert the object into a dict
label_field_dict = label_field_instance.to_dict()
# create an instance of LabelField from a dict
label_field_from_dict = LabelField.from_dict(label_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


