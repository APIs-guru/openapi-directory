# MetadataHeader

Type that defines the metadata header fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key value used for the report. For example: &amp;quot;key&amp;quot;: &amp;quot;LISTING_ID&amp;quot; | [optional] 
**metadata_keys** | [**List[Definition]**](Definition.md) | The list of dimension key values used for the report header. Each list element contains the key name, its data type, and its localized name. For example: &amp;quot;metadataKeys&amp;quot;: [ &amp;nbsp;&amp;nbsp;&amp;quot;key&amp;quot;: &amp;quot;LISTING_TITLE&amp;quot;, &amp;nbsp;&amp;nbsp;&amp;quot;localizedName&amp;quot;: &amp;quot;Listing title&amp;quot;, &amp;nbsp;&amp;nbsp;&amp;quot;dataType&amp;quot;: &amp;quot;STRING&amp;quot; | [optional] 

## Example

```python
from openapi_client.models.metadata_header import MetadataHeader

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataHeader from a JSON string
metadata_header_instance = MetadataHeader.from_json(json)
# print the JSON string representation of the object
print(MetadataHeader.to_json())

# convert the object into a dict
metadata_header_dict = metadata_header_instance.to_dict()
# create an instance of MetadataHeader from a dict
metadata_header_from_dict = MetadataHeader.from_dict(metadata_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


