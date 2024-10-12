# AccountFeatures


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**support_multiple_containers** | **bool** | Whether this Account supports multiple Containers. | [optional] 
**support_user_permissions** | **bool** | Whether this Account supports user permissions managed by GTM. | [optional] 

## Example

```python
from openapi_client.models.account_features import AccountFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of AccountFeatures from a JSON string
account_features_instance = AccountFeatures.from_json(json)
# print the JSON string representation of the object
print(AccountFeatures.to_json())

# convert the object into a dict
account_features_dict = account_features_instance.to_dict()
# create an instance of AccountFeatures from a dict
account_features_from_dict = AccountFeatures.from_dict(account_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


