# FieldReferenceData

Details of a field that can be used in advanced searches.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto** | **str** | Whether the field provide auto-complete suggestions. | [optional] 
**cfid** | **str** | If the item is a custom field, the ID of the custom field. | [optional] 
**deprecated** | **str** | Whether this field has been deprecated. | [optional] 
**deprecated_searcher_key** | **str** | The searcher key of the field, only passed when the field is deprecated. | [optional] 
**display_name** | **str** | The display name contains the following:   *  for system fields, the field name. For example, &#x60;Summary&#x60;.  *  for collapsed custom fields, the field name followed by a hyphen and then the field name and field type. For example, &#x60;Component - Component[Dropdown]&#x60;.  *  for other custom fields, the field name followed by a hyphen and then the custom field ID. For example, &#x60;Component - cf[10061]&#x60;. | [optional] 
**operators** | **List[str]** | The valid search operators for the field. | [optional] 
**orderable** | **str** | Whether the field can be used in a query&#39;s &#x60;ORDER BY&#x60; clause. | [optional] 
**searchable** | **str** | Whether the content of this field can be searched. | [optional] 
**types** | **List[str]** | The data types of items in the field. | [optional] 
**value** | **str** | The field identifier. | [optional] 

## Example

```python
from openapi_client.models.field_reference_data import FieldReferenceData

# TODO update the JSON string below
json = "{}"
# create an instance of FieldReferenceData from a JSON string
field_reference_data_instance = FieldReferenceData.from_json(json)
# print the JSON string representation of the object
print(FieldReferenceData.to_json())

# convert the object into a dict
field_reference_data_dict = field_reference_data_instance.to_dict()
# create an instance of FieldReferenceData from a dict
field_reference_data_from_dict = FieldReferenceData.from_dict(field_reference_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


