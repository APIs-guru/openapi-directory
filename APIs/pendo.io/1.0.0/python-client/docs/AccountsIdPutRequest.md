# AccountsIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly_value** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.accounts_id_put_request import AccountsIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsIdPutRequest from a JSON string
accounts_id_put_request_instance = AccountsIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(AccountsIdPutRequest.to_json())

# convert the object into a dict
accounts_id_put_request_dict = accounts_id_put_request_instance.to_dict()
# create an instance of AccountsIdPutRequest from a dict
accounts_id_put_request_from_dict = AccountsIdPutRequest.from_dict(accounts_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


