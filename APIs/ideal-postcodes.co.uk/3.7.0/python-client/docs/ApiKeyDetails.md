# ApiKeyDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_urls** | **List[str]** | A list of allowed URLs. An empty list means that allowed URLs are disabled. | 
**automated_topups** | [**ApiKeyAutomatedTopup**](ApiKeyAutomatedTopup.md) |  | 
**current_purchases** | [**List[ApiKeyCurrentPurchase]**](ApiKeyCurrentPurchase.md) | Current balance purchases attached to key. | 
**daily_limit** | [**ApiKeyDailyLimit**](ApiKeyDailyLimit.md) |  | 
**datasets** | [**ApiKeyDatasets**](ApiKeyDatasets.md) |  | [optional] 
**individual_limit** | [**ApiKeyIndividualLimit**](ApiKeyIndividualLimit.md) |  | 
**lookups_remaining** | **int** |  | 
**notifications** | [**ApiKeyNotifications**](ApiKeyNotifications.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_key_details import ApiKeyDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyDetails from a JSON string
api_key_details_instance = ApiKeyDetails.from_json(json)
# print the JSON string representation of the object
print(ApiKeyDetails.to_json())

# convert the object into a dict
api_key_details_dict = api_key_details_instance.to_dict()
# create an instance of ApiKeyDetails from a dict
api_key_details_from_dict = ApiKeyDetails.from_dict(api_key_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


