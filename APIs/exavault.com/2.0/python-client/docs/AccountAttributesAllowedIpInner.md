# AccountAttributesAllowedIpInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_end** | **str** |  | [optional] 
**ip_start** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.account_attributes_allowed_ip_inner import AccountAttributesAllowedIpInner

# TODO update the JSON string below
json = "{}"
# create an instance of AccountAttributesAllowedIpInner from a JSON string
account_attributes_allowed_ip_inner_instance = AccountAttributesAllowedIpInner.from_json(json)
# print the JSON string representation of the object
print(AccountAttributesAllowedIpInner.to_json())

# convert the object into a dict
account_attributes_allowed_ip_inner_dict = account_attributes_allowed_ip_inner_instance.to_dict()
# create an instance of AccountAttributesAllowedIpInner from a dict
account_attributes_allowed_ip_inner_from_dict = AccountAttributesAllowedIpInner.from_dict(account_attributes_allowed_ip_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


