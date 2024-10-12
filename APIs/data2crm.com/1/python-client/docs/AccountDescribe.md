# AccountDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_describe import AccountDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of AccountDescribe from a JSON string
account_describe_instance = AccountDescribe.from_json(json)
# print the JSON string representation of the object
print(AccountDescribe.to_json())

# convert the object into a dict
account_describe_dict = account_describe_instance.to_dict()
# create an instance of AccountDescribe from a dict
account_describe_from_dict = AccountDescribe.from_dict(account_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


