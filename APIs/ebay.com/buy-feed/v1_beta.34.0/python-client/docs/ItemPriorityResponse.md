# ItemPriorityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_delta** | [**List[ItemPriority]**](ItemPriority.md) | The container for the array of items returned by the &lt;b&gt;getItemPriorityFeed&lt;/b&gt; method. The data in the file is tab separated and the first row is the header, which labels the columns and indicates the order of the values on each line. The header labels match the fields that are described in the &lt;a href&#x3D;\&quot;/api-docs/buy/feed/resources/item/methods/getItemPriorityFeed#h3-response-fields\&quot;&gt;Response fields&lt;/a&gt; section. | [optional] 

## Example

```python
from openapi_client.models.item_priority_response import ItemPriorityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ItemPriorityResponse from a JSON string
item_priority_response_instance = ItemPriorityResponse.from_json(json)
# print the JSON string representation of the object
print(ItemPriorityResponse.to_json())

# convert the object into a dict
item_priority_response_dict = item_priority_response_instance.to_dict()
# create an instance of ItemPriorityResponse from a dict
item_priority_response_from_dict = ItemPriorityResponse.from_dict(item_priority_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


