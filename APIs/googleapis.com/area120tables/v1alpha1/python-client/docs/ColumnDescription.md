# ColumnDescription

Details on a column in the table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website. | [optional] 
**date_details** | [**DateDetails**](DateDetails.md) |  | [optional] 
**id** | **str** | Internal id for a column. | [optional] 
**labels** | [**List[LabeledItem]**](LabeledItem.md) | Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to help clients implement better user data validation. | [optional] 
**lookup_details** | [**LookupDetails**](LookupDetails.md) |  | [optional] 
**multiple_values_disallowed** | **bool** | Optional. Indicates whether or not multiple values are allowed for array types where such a restriction is possible. | [optional] 
**name** | **str** | column name | [optional] 
**readonly** | **bool** | Optional. Indicates that values for the column cannot be set by the user. | [optional] 
**relationship_details** | [**RelationshipDetails**](RelationshipDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.column_description import ColumnDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnDescription from a JSON string
column_description_instance = ColumnDescription.from_json(json)
# print the JSON string representation of the object
print(ColumnDescription.to_json())

# convert the object into a dict
column_description_dict = column_description_instance.to_dict()
# create an instance of ColumnDescription from a dict
column_description_from_dict = ColumnDescription.from_dict(column_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


