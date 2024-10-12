# ItemGroupResponse

The type that defines the array for the items returned in the <b>Item Group</b> feed file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_groups** | [**List[ItemGroup]**](ItemGroup.md) | The container for the array of items groups returned by the &lt;b&gt; getItemGroupFeed&lt;/b&gt; method. The data in the file is tab separated and the first row is the header, which labels the columns and indicates the order of the values for each item. The header labels match the fields that are described in the &lt;a href&#x3D;\&quot;/api-docs/buy/feed/resources/item_group/methods/getItemGroupFeed#h3-response-fields\&quot;&gt;Response fields&lt;/a&gt; section. | [optional] 

## Example

```python
from openapi_client.models.item_group_response import ItemGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ItemGroupResponse from a JSON string
item_group_response_instance = ItemGroupResponse.from_json(json)
# print the JSON string representation of the object
print(ItemGroupResponse.to_json())

# convert the object into a dict
item_group_response_dict = item_group_response_instance.to_dict()
# create an instance of ItemGroupResponse from a dict
item_group_response_from_dict = ItemGroupResponse.from_dict(item_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


