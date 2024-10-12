# ConnectCustomFieldValues

Details of updates for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_value_list** | [**List[ConnectCustomFieldValue]**](ConnectCustomFieldValue.md) | The list of custom field update details. | [optional] 

## Example

```python
from openapi_client.models.connect_custom_field_values import ConnectCustomFieldValues

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectCustomFieldValues from a JSON string
connect_custom_field_values_instance = ConnectCustomFieldValues.from_json(json)
# print the JSON string representation of the object
print(ConnectCustomFieldValues.to_json())

# convert the object into a dict
connect_custom_field_values_dict = connect_custom_field_values_instance.to_dict()
# create an instance of ConnectCustomFieldValues from a dict
connect_custom_field_values_from_dict = ConnectCustomFieldValues.from_dict(connect_custom_field_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


