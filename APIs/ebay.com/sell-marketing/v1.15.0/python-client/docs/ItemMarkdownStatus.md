# ItemMarkdownStatus

This type defines the status of a markdown promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listing_markdown_status** | **str** | Indicates the state assigned to the markdown promotion using one of the &lt;b&gt;status&lt;/b&gt; values. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**status_changed_date** | **str** | Identifies the date the last time the state of the promotion changed. Both both markdown and markup events can trigger a status change. | [optional] 
**status_message** | **str** | An eBay-assigned text string that describes the status of the promotion. | [optional] 

## Example

```python
from openapi_client.models.item_markdown_status import ItemMarkdownStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ItemMarkdownStatus from a JSON string
item_markdown_status_instance = ItemMarkdownStatus.from_json(json)
# print the JSON string representation of the object
print(ItemMarkdownStatus.to_json())

# convert the object into a dict
item_markdown_status_dict = item_markdown_status_instance.to_dict()
# create an instance of ItemMarkdownStatus from a dict
item_markdown_status_from_dict = ItemMarkdownStatus.from_dict(item_markdown_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


