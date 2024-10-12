# ItemSnapshotResponse

The type that defines the array for the items returned in the <b>Hourly Snapshot</b> feed file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ItemSnapshot]**](ItemSnapshot.md) | The container for the array of items returned by the &lt;b&gt; getItemSnapshotFeed&lt;/b&gt; method. &lt;p&gt;&lt;b&gt;Note: &lt;/b&gt; When the value of the &lt;b&gt; availability&lt;/b&gt; column is &lt;code&gt;UNAVAILABLE&lt;/code&gt;, only the &lt;b&gt;itemId&lt;/b&gt; and &lt;b&gt; availability&lt;/b&gt; columns are populated.  &lt;/p&gt;  | [optional] 

## Example

```python
from openapi_client.models.item_snapshot_response import ItemSnapshotResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ItemSnapshotResponse from a JSON string
item_snapshot_response_instance = ItemSnapshotResponse.from_json(json)
# print the JSON string representation of the object
print(ItemSnapshotResponse.to_json())

# convert the object into a dict
item_snapshot_response_dict = item_snapshot_response_instance.to_dict()
# create an instance of ItemSnapshotResponse from a dict
item_snapshot_response_from_dict = ItemSnapshotResponse.from_dict(item_snapshot_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


