# LegacyReference

Type defining the <b>legacyReference</b> container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legacy_item_id** | **str** | The unique identifier of a listing in legacy/Trading API format. &lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Both &lt;b&gt;legacyItemId&lt;/b&gt; and &lt;b&gt;legacyTransactionId&lt;/b&gt; are needed to identify an order line item. &lt;/span&gt; | [optional] 
**legacy_transaction_id** | **str** | The unique identifier of a sale/transaction in legacy/Trading API format. A &#39;transaction ID&#39; is created once a buyer purchases a &#39;Buy It Now&#39; item or if an auction listing ends with a winning bidder. &lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Both &lt;b&gt;legacyItemId&lt;/b&gt; and &lt;b&gt;legacyTransactionId&lt;/b&gt; are needed to identify an order line item. &lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.legacy_reference import LegacyReference

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyReference from a JSON string
legacy_reference_instance = LegacyReference.from_json(json)
# print the JSON string representation of the object
print(LegacyReference.to_json())

# convert the object into a dict
legacy_reference_dict = legacy_reference_instance.to_dict()
# create an instance of LegacyReference from a dict
legacy_reference_from_dict = LegacyReference.from_dict(legacy_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


