# Attribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_extensions** | **List[str]** | Extensions allowed when the attribute type is &#x60;pim_catalog_file&#x60; or &#x60;pim_catalog_image&#x60; | [optional] 
**available_locales** | **List[str]** | To make the attribute locale specfic, specify here for which locales it is specific | [optional] 
**code** | **str** | Attribute code | 
**date_max** | **datetime** | Maximum date allowed when the attribute type is &#x60;pim_catalog_date&#x60; | [optional] 
**date_min** | **datetime** | Minimum date allowed when the attribute type is &#x60;pim_catalog_date&#x60; | [optional] 
**decimals_allowed** | **bool** | Whether decimals are allowed when the attribute type is &#x60;pim_catalog_metric&#x60;, &#x60;pim_catalog_price&#x60; or &#x60;pim_catalog_number&#x60; | [optional] 
**default_metric_unit** | **str** | Default metric unit when the attribute type is &#x60;pim_catalog_metric&#x60; | [optional] 
**default_value** | **bool** | Default value for a Yes/No attribute, applied when creating a new product or product model (only available since the 5.0) | [optional] 
**group** | **str** | Attribute group | 
**group_labels** | [**AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels**](AttributesAllOfEmbeddedItemsInnerAllOfGroupLabels.md) |  | [optional] 
**labels** | [**GetAssetFamiliesCodeAttributes200ResponseInnerLabels**](GetAssetFamiliesCodeAttributes200ResponseInnerLabels.md) |  | [optional] 
**localizable** | **bool** | Whether the attribute is localizable, i.e. can have one value by locale | [optional] [default to False]
**max_characters** | **int** | Number maximum of characters allowed for the value of the attribute when the attribute type is &#x60;pim_catalog_text&#x60;, &#x60;pim_catalog_textarea&#x60; or &#x60;pim_catalog_identifier&#x60; | [optional] 
**max_file_size** | **str** | Max file size in MB when the attribute type is &#x60;pim_catalog_file&#x60; or &#x60;pim_catalog_image&#x60; | [optional] 
**metric_family** | **str** | Metric family when the attribute type is &#x60;pim_catalog_metric&#x60; | [optional] 
**negative_allowed** | **bool** | Whether negative values are allowed when the attribute type is &#x60;pim_catalog_metric&#x60; or &#x60;pim_catalog_number&#x60; | [optional] 
**number_max** | **str** | Maximum integer value allowed when the attribute type is &#x60;pim_catalog_metric&#x60;, &#x60;pim_catalog_price&#x60; or &#x60;pim_catalog_number&#x60; | [optional] 
**number_min** | **str** | Minimum integer value allowed when the attribute type is &#x60;pim_catalog_metric&#x60;, &#x60;pim_catalog_price&#x60; or &#x60;pim_catalog_number&#x60; | [optional] 
**reference_data_name** | **str** | Reference entity code when the attribute type is &#x60;akeneo_reference_entity&#x60; or &#x60;akeneo_reference_entity_collection&#x60; OR Asset family code when the attribute type is &#x60;pim_catalog_asset_collection&#x60; | [optional] 
**scopable** | **bool** | Whether the attribute is scopable, i.e. can have one value by channel | [optional] [default to False]
**sort_order** | **int** | Order of the attribute in its group | [optional] 
**table_configuration** | [**List[AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner]**](AttributesAllOfEmbeddedItemsInnerAllOfTableConfigurationInner.md) | Configuration of the Table attribute (columns) | [optional] 
**type** | **str** | Attribute type. See &lt;a href&#x3D;&#39;/concepts/catalog-structure.html#attribute&#39;&gt;type&lt;/a&gt; section for more details. | 
**unique** | **bool** | Whether two values for the attribute cannot be the same | [optional] 
**useable_as_grid_filter** | **bool** | Whether the attribute can be used as a filter for the product grid in the PIM user interface | [optional] 
**validation_regexp** | **str** | Regexp expression used to validate any attribute value when the attribute type is &#x60;pim_catalog_text&#x60; or &#x60;pim_catalog_identifier&#x60; | [optional] 
**validation_rule** | **str** | Validation rule type used to validate any attribute value when the attribute type is &#x60;pim_catalog_text&#x60; or &#x60;pim_catalog_identifier&#x60; | [optional] 
**wysiwyg_enabled** | **bool** | Whether the WYSIWYG interface is shown when the attribute type is &#x60;pim_catalog_textarea&#x60; | [optional] 

## Example

```python
from openapi_client.models.attribute import Attribute

# TODO update the JSON string below
json = "{}"
# create an instance of Attribute from a JSON string
attribute_instance = Attribute.from_json(json)
# print the JSON string representation of the object
print(Attribute.to_json())

# convert the object into a dict
attribute_dict = attribute_instance.to_dict()
# create an instance of Attribute from a dict
attribute_from_dict = Attribute.from_dict(attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


