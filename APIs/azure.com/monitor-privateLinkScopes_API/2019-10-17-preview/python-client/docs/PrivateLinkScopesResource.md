# PrivateLinkScopesResource

An azure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_link_scopes_resource import PrivateLinkScopesResource

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkScopesResource from a JSON string
private_link_scopes_resource_instance = PrivateLinkScopesResource.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkScopesResource.to_json())

# convert the object into a dict
private_link_scopes_resource_dict = private_link_scopes_resource_instance.to_dict()
# create an instance of PrivateLinkScopesResource from a dict
private_link_scopes_resource_from_dict = PrivateLinkScopesResource.from_dict(private_link_scopes_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


