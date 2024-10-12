# ConnectCustomFieldValue

A list of custom field details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of custom field. | 
**field_id** | **int** | The custom field ID. | 
**issue_id** | **int** | The issue ID. | 
**number** | **float** | The value of number type custom field when &#x60;_type&#x60; is &#x60;NumberIssueField&#x60;. | [optional] 
**option_id** | **str** | The value of single select and multiselect custom field type when &#x60;_type&#x60; is &#x60;SingleSelectIssueField&#x60; or &#x60;MultiSelectIssueField&#x60;. | [optional] 
**rich_text** | **str** | The value of richText type custom field when &#x60;_type&#x60; is &#x60;RichTextIssueField&#x60;. | [optional] 
**string** | **str** | The value of string type custom field when &#x60;_type&#x60; is &#x60;StringIssueField&#x60;. | [optional] 
**text** | **str** | The value of of text custom field type when &#x60;_type&#x60; is &#x60;TextIssueField&#x60;. | [optional] 

## Example

```python
from openapi_client.models.connect_custom_field_value import ConnectCustomFieldValue

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectCustomFieldValue from a JSON string
connect_custom_field_value_instance = ConnectCustomFieldValue.from_json(json)
# print the JSON string representation of the object
print(ConnectCustomFieldValue.to_json())

# convert the object into a dict
connect_custom_field_value_dict = connect_custom_field_value_instance.to_dict()
# create an instance of ConnectCustomFieldValue from a dict
connect_custom_field_value_from_dict = ConnectCustomFieldValue.from_dict(connect_custom_field_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


