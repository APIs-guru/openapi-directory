# DimensionKeyAnnotation

This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be <code>listing_title</code> or <code>listing_quantity_sold</code>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_key** | **str** | An annotation key associated with the dimension. | [optional] 
**data_type** | **str** | The data type of the annotation key value. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.dimension_key_annotation import DimensionKeyAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionKeyAnnotation from a JSON string
dimension_key_annotation_instance = DimensionKeyAnnotation.from_json(json)
# print the JSON string representation of the object
print(DimensionKeyAnnotation.to_json())

# convert the object into a dict
dimension_key_annotation_dict = dimension_key_annotation_instance.to_dict()
# create an instance of DimensionKeyAnnotation from a dict
dimension_key_annotation_from_dict = DimensionKeyAnnotation.from_dict(dimension_key_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


