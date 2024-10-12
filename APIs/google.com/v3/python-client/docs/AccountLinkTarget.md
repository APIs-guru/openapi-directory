# AccountLinkTarget

Defines whether all properties or a subset of properties in the Hotel Center account can be managed with the linked Google Ads account. If a subset, the specific properties are specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_hotels** | **bool** | True if all properties under the Hotel Center account are made available to the account link. The default is &#x60;false&#x60;. | [optional] 
**hotel_list** | [**HotelList**](HotelList.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_link_target import AccountLinkTarget

# TODO update the JSON string below
json = "{}"
# create an instance of AccountLinkTarget from a JSON string
account_link_target_instance = AccountLinkTarget.from_json(json)
# print the JSON string representation of the object
print(AccountLinkTarget.to_json())

# convert the object into a dict
account_link_target_dict = account_link_target_instance.to_dict()
# create an instance of AccountLinkTarget from a dict
account_link_target_from_dict = AccountLinkTarget.from_dict(account_link_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


