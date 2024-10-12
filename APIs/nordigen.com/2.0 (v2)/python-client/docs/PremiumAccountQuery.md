# PremiumAccountQuery

Filter country.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**CountryEnum**](CountryEnum.md) |  | [optional] 
**date_from** | **date** |  | [optional] 
**date_to** | **date** |  | [optional] 

## Example

```python
from openapi_client.models.premium_account_query import PremiumAccountQuery

# TODO update the JSON string below
json = "{}"
# create an instance of PremiumAccountQuery from a JSON string
premium_account_query_instance = PremiumAccountQuery.from_json(json)
# print the JSON string representation of the object
print(PremiumAccountQuery.to_json())

# convert the object into a dict
premium_account_query_dict = premium_account_query_instance.to_dict()
# create an instance of PremiumAccountQuery from a dict
premium_account_query_from_dict = PremiumAccountQuery.from_dict(premium_account_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


