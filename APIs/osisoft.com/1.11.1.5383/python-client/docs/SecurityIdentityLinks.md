# SecurityIdentityLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_server** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**security_mappings** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.security_identity_links import SecurityIdentityLinks

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityIdentityLinks from a JSON string
security_identity_links_instance = SecurityIdentityLinks.from_json(json)
# print the JSON string representation of the object
print(SecurityIdentityLinks.to_json())

# convert the object into a dict
security_identity_links_dict = security_identity_links_instance.to_dict()
# create an instance of SecurityIdentityLinks from a dict
security_identity_links_from_dict = SecurityIdentityLinks.from_dict(security_identity_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


