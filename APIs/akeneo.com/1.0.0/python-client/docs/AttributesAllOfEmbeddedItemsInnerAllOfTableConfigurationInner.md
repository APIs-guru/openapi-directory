# AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Column code | 
**data_type** | **str** | Column data type | 
**is_required_for_completeness** | **bool** | Defines if the column should be entirely filled for the attribute to be considered complete | [optional] [default to False]
**labels** | [**AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerLabels**](AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerLabels.md) |  | [optional] 
**validations** | [**AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations**](AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInnerValidations.md) |  | [optional] 

## Example

```python
from openapi_client.models.attributes_all_of_embedded_items_inner_all_of_table_configuration_inner import AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner

# TODO update the JSON string below
json = "{}"
# create an instance of AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner from a JSON string
attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_instance = AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner.from_json(json)
# print the JSON string representation of the object
print(AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner.to_json())

# convert the object into a dict
attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_dict = attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_instance.to_dict()
# create an instance of AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner from a dict
attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_from_dict = AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner.from_dict(attributes_all_of_embedded_items_inner_all_of_table_configuration_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


