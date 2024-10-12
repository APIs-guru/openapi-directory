# FieldConfigurationItemsDetails

Details of field configuration items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_configuration_items** | [**List[FieldConfigurationItem]**](FieldConfigurationItem.md) | Details of fields in a field configuration. | 

## Example

```python
from openapi_client.models.field_configuration_items_details import FieldConfigurationItemsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FieldConfigurationItemsDetails from a JSON string
field_configuration_items_details_instance = FieldConfigurationItemsDetails.from_json(json)
# print the JSON string representation of the object
print(FieldConfigurationItemsDetails.to_json())

# convert the object into a dict
field_configuration_items_details_dict = field_configuration_items_details_instance.to_dict()
# create an instance of FieldConfigurationItemsDetails from a dict
field_configuration_items_details_from_dict = FieldConfigurationItemsDetails.from_dict(field_configuration_items_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


