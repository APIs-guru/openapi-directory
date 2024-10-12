# InAppPurchasesFound

Additional details of in-app purchases encountered during the crawl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_app_purchases_flows_explored** | **int** | The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU. | [optional] 
**in_app_purchases_flows_started** | **int** | The total number of in-app purchases flows started. | [optional] 

## Example

```python
from openapi_client.models.in_app_purchases_found import InAppPurchasesFound

# TODO update the JSON string below
json = "{}"
# create an instance of InAppPurchasesFound from a JSON string
in_app_purchases_found_instance = InAppPurchasesFound.from_json(json)
# print the JSON string representation of the object
print(InAppPurchasesFound.to_json())

# convert the object into a dict
in_app_purchases_found_dict = in_app_purchases_found_instance.to_dict()
# create an instance of InAppPurchasesFound from a dict
in_app_purchases_found_from_dict = InAppPurchasesFound.from_dict(in_app_purchases_found_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


