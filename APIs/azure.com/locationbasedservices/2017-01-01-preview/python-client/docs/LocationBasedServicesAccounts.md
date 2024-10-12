# LocationBasedServicesAccounts

A list of Location Based Services Accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[LocationBasedServicesAccount]**](LocationBasedServicesAccount.md) | A Location Based Services Account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.location_based_services_accounts import LocationBasedServicesAccounts

# TODO update the JSON string below
json = "{}"
# create an instance of LocationBasedServicesAccounts from a JSON string
location_based_services_accounts_instance = LocationBasedServicesAccounts.from_json(json)
# print the JSON string representation of the object
print(LocationBasedServicesAccounts.to_json())

# convert the object into a dict
location_based_services_accounts_dict = location_based_services_accounts_instance.to_dict()
# create an instance of LocationBasedServicesAccounts from a dict
location_based_services_accounts_from_dict = LocationBasedServicesAccounts.from_dict(location_based_services_accounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


