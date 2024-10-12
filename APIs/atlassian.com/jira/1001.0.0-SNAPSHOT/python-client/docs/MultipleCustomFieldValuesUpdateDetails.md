# MultipleCustomFieldValuesUpdateDetails

List of updates for a custom fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updates** | [**List[MultipleCustomFieldValuesUpdate]**](MultipleCustomFieldValuesUpdate.md) |  | [optional] 

## Example

```python
from openapi_client.models.multiple_custom_field_values_update_details import MultipleCustomFieldValuesUpdateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MultipleCustomFieldValuesUpdateDetails from a JSON string
multiple_custom_field_values_update_details_instance = MultipleCustomFieldValuesUpdateDetails.from_json(json)
# print the JSON string representation of the object
print(MultipleCustomFieldValuesUpdateDetails.to_json())

# convert the object into a dict
multiple_custom_field_values_update_details_dict = multiple_custom_field_values_update_details_instance.to_dict()
# create an instance of MultipleCustomFieldValuesUpdateDetails from a dict
multiple_custom_field_values_update_details_from_dict = MultipleCustomFieldValuesUpdateDetails.from_dict(multiple_custom_field_values_update_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


