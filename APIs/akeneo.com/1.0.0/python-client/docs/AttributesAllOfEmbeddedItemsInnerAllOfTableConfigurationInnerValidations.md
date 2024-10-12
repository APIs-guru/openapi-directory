# AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations

User defined validation constraints on the cell content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decimals_allowed** | **bool** | whether the value of a numeric cell can hold a decimal part | [optional] 
**max** | **float** | maximum value of a numeric cell | [optional] 
**max_length** | **float** | maximum length of a text cell | [optional] 
**min** | **float** | minimum value of a numeric cell | [optional] 

## Example

```python
from openapi_client.models.attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_validations import AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations

# TODO update the JSON string below
json = "{}"
# create an instance of AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations from a JSON string
attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_validations_instance = AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations.from_json(json)
# print the JSON string representation of the object
print(AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations.to_json())

# convert the object into a dict
attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_validations_dict = attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_validations_instance.to_dict()
# create an instance of AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations from a dict
attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_validations_from_dict = AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations.from_dict(attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_validations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


