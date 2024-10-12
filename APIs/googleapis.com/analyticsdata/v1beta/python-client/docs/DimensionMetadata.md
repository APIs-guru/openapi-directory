# DimensionMetadata

Explains a dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_name** | **str** | This dimension&#39;s name. Useable in [Dimension](#Dimension)&#39;s &#x60;name&#x60;. For example, &#x60;eventName&#x60;. | [optional] 
**category** | **str** | The display name of the category that this dimension belongs to. Similar dimensions and metrics are categorized together. | [optional] 
**custom_definition** | **bool** | True if the dimension is custom to this property. This includes user, event, &amp; item scoped custom dimensions; to learn more about custom dimensions, see https://support.google.com/analytics/answer/14240153. This also include custom channel groups; to learn more about custom channel groups, see https://support.google.com/analytics/answer/13051316. | [optional] 
**deprecated_api_names** | **List[str]** | Still usable but deprecated names for this dimension. If populated, this dimension is available by either &#x60;apiName&#x60; or one of &#x60;deprecatedApiNames&#x60; for a period of time. After the deprecation period, the dimension will be available only by &#x60;apiName&#x60;. | [optional] 
**description** | **str** | Description of how this dimension is used and calculated. | [optional] 
**ui_name** | **str** | This dimension&#39;s name within the Google Analytics user interface. For example, &#x60;Event name&#x60;. | [optional] 

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


