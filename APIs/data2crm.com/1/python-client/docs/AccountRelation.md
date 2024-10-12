# AccountRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**AccountEntityRelation**](AccountEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.account_relation import AccountRelation

# TODO update the JSON string below
json = "{}"
# create an instance of AccountRelation from a JSON string
account_relation_instance = AccountRelation.from_json(json)
# print the JSON string representation of the object
print(AccountRelation.to_json())

# convert the object into a dict
account_relation_dict = account_relation_instance.to_dict()
# create an instance of AccountRelation from a dict
account_relation_from_dict = AccountRelation.from_dict(account_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


