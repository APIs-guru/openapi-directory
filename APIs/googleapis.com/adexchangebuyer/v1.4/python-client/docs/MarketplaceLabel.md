# MarketplaceLabel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The accountId of the party that created the label. | [optional] 
**create_time_ms** | **str** | The creation time (in ms since epoch) for the label. | [optional] 
**deprecated_marketplace_deal_party** | [**MarketplaceDealParty**](MarketplaceDealParty.md) |  | [optional] 
**label** | **str** | The label to use. | [optional] 

## Example

```python
from openapi_client.models.marketplace_label import MarketplaceLabel

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceLabel from a JSON string
marketplace_label_instance = MarketplaceLabel.from_json(json)
# print the JSON string representation of the object
print(MarketplaceLabel.to_json())

# convert the object into a dict
marketplace_label_dict = marketplace_label_instance.to_dict()
# create an instance of MarketplaceLabel from a dict
marketplace_label_from_dict = MarketplaceLabel.from_dict(marketplace_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


