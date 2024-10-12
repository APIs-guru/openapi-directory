# AccountTreeResponse

JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | [optional] 
**kind** | **str** | Resource type for account ticket. | [optional] [default to 'analytics#accountTreeResponse']
**profile** | [**Profile**](Profile.md) |  | [optional] 
**webproperty** | [**Webproperty**](Webproperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_tree_response import AccountTreeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountTreeResponse from a JSON string
account_tree_response_instance = AccountTreeResponse.from_json(json)
# print the JSON string representation of the object
print(AccountTreeResponse.to_json())

# convert the object into a dict
account_tree_response_dict = account_tree_response_instance.to_dict()
# create an instance of AccountTreeResponse from a dict
account_tree_response_from_dict = AccountTreeResponse.from_dict(account_tree_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


