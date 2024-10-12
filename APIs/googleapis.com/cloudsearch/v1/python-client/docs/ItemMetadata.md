# ItemMetadata

Available metadata fields for the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters. | [optional] 
**content_language** | **str** | The BCP-47 language code for the item, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters. | [optional] 
**context_attributes** | [**List[ContextAttribute]**](ContextAttribute.md) | A set of named attributes associated with the item. This can be used for influencing the ranking of the item based on the context in the request. The maximum number of elements is 10. | [optional] 
**create_time** | **str** | The time when the item was created in the source repository. | [optional] 
**hash** | **str** | Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters. | [optional] 
**interactions** | [**List[Interaction]**](Interaction.md) | A list of interactions for the item. Interactions are used to improve Search quality, but are not exposed to end users. The maximum number of elements is 1000. | [optional] 
**keywords** | **List[str]** | Additional keywords or phrases that should match the item. Used internally for user generated content. The maximum number of elements is 100. The maximum length is 8192 characters. | [optional] 
**mime_type** | **str** | The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters. | [optional] 
**object_type** | **str** | The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name &#39;document&#39;, then item indexing requests for objects of that type should set objectType to &#39;document&#39;. The maximum length is 256 characters. | [optional] 
**search_quality_metadata** | [**SearchQualityMetadata**](SearchQualityMetadata.md) |  | [optional] 
**source_repository_url** | **str** | Link to the source repository serving the data. Seach results apply this link to the title. Whitespace or special characters may cause Cloud Seach result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters. | [optional] 
**title** | **str** | The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters. | [optional] 
**update_time** | **str** | The time when the item was last modified in the source repository. | [optional] 

## Example

```python
from openapi_client.models.item_metadata import ItemMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ItemMetadata from a JSON string
item_metadata_instance = ItemMetadata.from_json(json)
# print the JSON string representation of the object
print(ItemMetadata.to_json())

# convert the object into a dict
item_metadata_dict = item_metadata_instance.to_dict()
# create an instance of ItemMetadata from a dict
item_metadata_from_dict = ItemMetadata.from_dict(item_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


