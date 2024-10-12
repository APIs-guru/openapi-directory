# CustomFieldValueUpdateDetails

Details of updates for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updates** | [**List[CustomFieldValueUpdate]**](CustomFieldValueUpdate.md) | The list of custom field update details. | [optional] 

## Example

```python
from openapi_client.models.custom_field_value_update_details import CustomFieldValueUpdateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldValueUpdateDetails from a JSON string
custom_field_value_update_details_instance = CustomFieldValueUpdateDetails.from_json(json)
# print the JSON string representation of the object
print(CustomFieldValueUpdateDetails.to_json())

# convert the object into a dict
custom_field_value_update_details_dict = custom_field_value_update_details_instance.to_dict()
# create an instance of CustomFieldValueUpdateDetails from a dict
custom_field_value_update_details_from_dict = CustomFieldValueUpdateDetails.from_dict(custom_field_value_update_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


