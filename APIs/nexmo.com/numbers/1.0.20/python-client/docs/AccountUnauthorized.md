# AccountUnauthorized


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | The status code of the response. &#x60;200&#x60; indicates a successful request. | [optional] 
**error_code_label** | **str** | The status code description | [optional] 

## Example

```python
from openapi_client.models.account_unauthorized import AccountUnauthorized

# TODO update the JSON string below
json = "{}"
# create an instance of AccountUnauthorized from a JSON string
account_unauthorized_instance = AccountUnauthorized.from_json(json)
# print the JSON string representation of the object
print(AccountUnauthorized.to_json())

# convert the object into a dict
account_unauthorized_dict = account_unauthorized_instance.to_dict()
# create an instance of AccountUnauthorized from a dict
account_unauthorized_from_dict = AccountUnauthorized.from_dict(account_unauthorized_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


