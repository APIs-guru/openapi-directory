# DimensionMetadata

This type defines the dimension used to create the report and the annotation keys associated with that dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The data type of the dimension value used to create the report. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**dimension_key** | **str** | The name of the dimension used to create the report. | [optional] 
**dimension_key_annotations** | [**List[DimensionKeyAnnotation]**](DimensionKeyAnnotation.md) | An list of annotation keys associated with the specified dimension of the report. | [optional] 

## Example

```python
from openapi_client.models.dimension_metadata import DimensionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionMetadata from a JSON string
dimension_metadata_instance = DimensionMetadata.from_json(json)
# print the JSON string representation of the object
print(DimensionMetadata.to_json())

# convert the object into a dict
dimension_metadata_dict = dimension_metadata_instance.to_dict()
# create an instance of DimensionMetadata from a dict
dimension_metadata_from_dict = DimensionMetadata.from_dict(dimension_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


