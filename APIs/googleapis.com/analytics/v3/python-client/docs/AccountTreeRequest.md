# AccountTreeRequest

JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** |  | [optional] 
**kind** | **str** | Resource type for account ticket. | [optional] [default to 'analytics#accountTreeRequest']
**profile_name** | **str** |  | [optional] 
**timezone** | **str** |  | [optional] 
**webproperty_name** | **str** |  | [optional] 
**website_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.account_tree_request import AccountTreeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountTreeRequest from a JSON string
account_tree_request_instance = AccountTreeRequest.from_json(json)
# print the JSON string representation of the object
print(AccountTreeRequest.to_json())

# convert the object into a dict
account_tree_request_dict = account_tree_request_instance.to_dict()
# create an instance of AccountTreeRequest from a dict
account_tree_request_from_dict = AccountTreeRequest.from_dict(account_tree_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


