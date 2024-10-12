# AccountFilterCollection

A collection of AccountFilter items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[AccountFilter]**](AccountFilter.md) | A collection of AccountFilter items. | [optional] 

## Example

```python
from openapi_client.models.account_filter_collection import AccountFilterCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AccountFilterCollection from a JSON string
account_filter_collection_instance = AccountFilterCollection.from_json(json)
# print the JSON string representation of the object
print(AccountFilterCollection.to_json())

# convert the object into a dict
account_filter_collection_dict = account_filter_collection_instance.to_dict()
# create an instance of AccountFilterCollection from a dict
account_filter_collection_from_dict = AccountFilterCollection.from_dict(account_filter_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


