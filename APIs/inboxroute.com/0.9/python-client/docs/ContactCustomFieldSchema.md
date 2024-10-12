# ContactCustomFieldSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | equivalent to html form input name attribute | 
**label** | **str** | User friendly label describing the field | 
**required** | **bool** | Is field required | [optional] 
**type** | **int** | Type (   1- String / text free form   2- Numeric / integer or decimal   3- Date / ISO 8601 format (YYYY/MM/DD) )  | 

## Example

```python
from openapi_client.models.contact_custom_field_schema import ContactCustomFieldSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ContactCustomFieldSchema from a JSON string
contact_custom_field_schema_instance = ContactCustomFieldSchema.from_json(json)
# print the JSON string representation of the object
print(ContactCustomFieldSchema.to_json())

# convert the object into a dict
contact_custom_field_schema_dict = contact_custom_field_schema_instance.to_dict()
# create an instance of ContactCustomFieldSchema from a dict
contact_custom_field_schema_from_dict = ContactCustomFieldSchema.from_dict(contact_custom_field_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


