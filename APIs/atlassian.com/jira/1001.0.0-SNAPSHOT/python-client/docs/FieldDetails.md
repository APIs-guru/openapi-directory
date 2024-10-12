# FieldDetails

Details about a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clause_names** | **List[str]** | The names that can be used to reference the field in an advanced search. For more information, see [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ). | [optional] 
**custom** | **bool** | Whether the field is a custom field. | [optional] 
**id** | **str** | The ID of the field. | [optional] 
**key** | **str** | The key of the field. | [optional] 
**name** | **str** | The name of the field. | [optional] 
**navigable** | **bool** | Whether the field can be used as a column on the issue navigator. | [optional] 
**orderable** | **bool** | Whether the content of the field can be used to order lists. | [optional] 
**var_schema** | [**JsonTypeBean**](JsonTypeBean.md) | The data schema for the field. | [optional] 
**scope** | [**Scope**](Scope.md) | The scope of the field. | [optional] 
**searchable** | **bool** | Whether the content of the field can be searched. | [optional] 

## Example

```python
from openapi_client.models.field_details import FieldDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FieldDetails from a JSON string
field_details_instance = FieldDetails.from_json(json)
# print the JSON string representation of the object
print(FieldDetails.to_json())

# convert the object into a dict
field_details_dict = field_details_instance.to_dict()
# create an instance of FieldDetails from a dict
field_details_from_dict = FieldDetails.from_dict(field_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


