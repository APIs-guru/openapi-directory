# ItemBasis

A container for details regarding the basis for an item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_value** | **int** | The estimated value of the search impressions for items based on the provided dimensions. &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Duration:&lt;/b&gt; 17 days&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Total slots:&lt;/b&gt; 200 &lt;br /&gt;&lt;br /&gt;&lt;b&gt;Channel:&lt;/b&gt; Dweb, Mweb, Native | [optional] 
**metric** | **str** | The basis of the statistics. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:TargetingMetricsEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.item_basis import ItemBasis

# TODO update the JSON string below
json = "{}"
# create an instance of ItemBasis from a JSON string
item_basis_instance = ItemBasis.from_json(json)
# print the JSON string representation of the object
print(ItemBasis.to_json())

# convert the object into a dict
item_basis_dict = item_basis_instance.to_dict()
# create an instance of ItemBasis from a dict
item_basis_from_dict = ItemBasis.from_dict(item_basis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


