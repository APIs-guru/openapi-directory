# MarketplaceProductLogUpdate

Update details for product log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Error details related to operation. | [optional] [readonly] 
**error** | **str** | Error related to the operation. | [optional] [readonly] 
**operation** | **str** | Operation to log. | [optional] [readonly] 
**status** | **str** | Operation status to log. | [optional] [readonly] 

## Example

```python
from openapi_client.models.marketplace_product_log_update import MarketplaceProductLogUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceProductLogUpdate from a JSON string
marketplace_product_log_update_instance = MarketplaceProductLogUpdate.from_json(json)
# print the JSON string representation of the object
print(MarketplaceProductLogUpdate.to_json())

# convert the object into a dict
marketplace_product_log_update_dict = marketplace_product_log_update_instance.to_dict()
# create an instance of MarketplaceProductLogUpdate from a dict
marketplace_product_log_update_from_dict = MarketplaceProductLogUpdate.from_dict(marketplace_product_log_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


