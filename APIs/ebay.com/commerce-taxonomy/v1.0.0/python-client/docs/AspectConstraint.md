# AspectConstraint

This type contains information about the formatting, occurrence, and support of an aspect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_applicable_to** | **List[str]** | This value indicate if the aspect identified by the aspects.localizedAspectName field is a product aspect (relevant to catalog products in the category) or an item/instance aspect, which is an aspect whose value will vary based on a particular instance of the product. | [optional] 
**aspect_data_type** | **str** | The data type of this aspect. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:AspectDataTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**aspect_enabled_for_variations** | **bool** | A value of true indicates that this aspect can be used to help identify item variations. | [optional] 
**aspect_format** | **str** | Returned only if the value of aspectDataType identifies a data type that requires specific formatting. Currently, this field provides formatting hints as follows: DATE: YYYY, YYYYMM, YYYYMMDD NUMBER: int32, double | [optional] 
**aspect_max_length** | **int** | The maximum length of the item/instance aspect&#39;s value. The seller must make sure not to exceed this length when specifying the instance aspect&#39;s value for a product. This field is only returned for instance aspects. | [optional] 
**aspect_mode** | **str** | The manner in which values of this aspect must be specified by the seller (as free text or by selecting from available options). For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:AspectModeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**aspect_required** | **bool** | A value of true indicates that this aspect is required when offering items in the specified category. | [optional] 
**aspect_usage** | **str** | The enumeration value returned in this field will indicate if the corresponding aspect is recommended or optional. Note: This field is always returned, even for hard-mandated/required aspects (where aspectRequired: true). The value returned for required aspects will be RECOMMENDED, but they are actually required and a seller will be blocked from listing or revising an item without these aspects. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:AspectUsageEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**expected_required_by_date** | **str** | The expected date after which the aspect will be required. Note: The value returned in this field specifies only an approximate date, which may not reflect the actual date after which the aspect is required. | [optional] 
**item_to_aspect_cardinality** | **str** | Indicates whether this aspect can accept single or multiple values for items in the specified category. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:ItemToAspectCardinalityEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.aspect_constraint import AspectConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of AspectConstraint from a JSON string
aspect_constraint_instance = AspectConstraint.from_json(json)
# print the JSON string representation of the object
print(AspectConstraint.to_json())

# convert the object into a dict
aspect_constraint_dict = aspect_constraint_instance.to_dict()
# create an instance of AspectConstraint from a dict
aspect_constraint_from_dict = AspectConstraint.from_dict(aspect_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


