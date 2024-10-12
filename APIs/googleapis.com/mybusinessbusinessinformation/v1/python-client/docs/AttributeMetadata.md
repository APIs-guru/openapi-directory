# AttributeMetadata

Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecated** | **bool** | If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error. | [optional] 
**display_name** | **str** | The localized display name for the attribute, if available; otherwise, the English display name. | [optional] 
**group_display_name** | **str** | The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here. | [optional] 
**parent** | **str** | The unique identifier for the attribute. | [optional] 
**repeatable** | **bool** | If true, the attribute supports multiple values. If false, only a single value should be provided. | [optional] 
**value_metadata** | [**List[AttributeValueMetadata]**](AttributeValueMetadata.md) | For some types of attributes (for example, enums), a list of supported values and corresponding display names for those values is provided. | [optional] 
**value_type** | **str** | The value type for the attribute. Values set and retrieved should be expected to be of this type. | [optional] 

## Example

```python
from openapi_client.models.attribute_metadata import AttributeMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeMetadata from a JSON string
attribute_metadata_instance = AttributeMetadata.from_json(json)
# print the JSON string representation of the object
print(AttributeMetadata.to_json())

# convert the object into a dict
attribute_metadata_dict = attribute_metadata_instance.to_dict()
# create an instance of AttributeMetadata from a dict
attribute_metadata_from_dict = AttributeMetadata.from_dict(attribute_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


