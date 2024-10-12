# PaginatedCreditorAccountList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[CreditorAccount]**](CreditorAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.paginated_creditor_account_list import PaginatedCreditorAccountList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedCreditorAccountList from a JSON string
paginated_creditor_account_list_instance = PaginatedCreditorAccountList.from_json(json)
# print the JSON string representation of the object
print(PaginatedCreditorAccountList.to_json())

# convert the object into a dict
paginated_creditor_account_list_dict = paginated_creditor_account_list_instance.to_dict()
# create an instance of PaginatedCreditorAccountList from a dict
paginated_creditor_account_list_from_dict = PaginatedCreditorAccountList.from_dict(paginated_creditor_account_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


