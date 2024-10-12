# AppUpdateRequestDataRelationshipsPrices


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsPricesDataInner]**](AppRelationshipsPricesDataInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_update_request_data_relationships_prices import AppUpdateRequestDataRelationshipsPrices

# TODO update the JSON string below
json = "{}"
# create an instance of AppUpdateRequestDataRelationshipsPrices from a JSON string
app_update_request_data_relationships_prices_instance = AppUpdateRequestDataRelationshipsPrices.from_json(json)
# print the JSON string representation of the object
print(AppUpdateRequestDataRelationshipsPrices.to_json())

# convert the object into a dict
app_update_request_data_relationships_prices_dict = app_update_request_data_relationships_prices_instance.to_dict()
# create an instance of AppUpdateRequestDataRelationshipsPrices from a dict
app_update_request_data_relationships_prices_from_dict = AppUpdateRequestDataRelationshipsPrices.from_dict(app_update_request_data_relationships_prices_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


