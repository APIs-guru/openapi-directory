# DomainMembership

A Google Workspace Domain membership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_viewer_domain** | **bool** | True if the person is in the viewer&#39;s Google Workspace domain. | [optional] 

## Example

```python
from openapi_client.models.domain_membership import DomainMembership

# TODO update the JSON string below
json = "{}"
# create an instance of DomainMembership from a JSON string
domain_membership_instance = DomainMembership.from_json(json)
# print the JSON string representation of the object
print(DomainMembership.to_json())

# convert the object into a dict
domain_membership_dict = domain_membership_instance.to_dict()
# create an instance of DomainMembership from a dict
domain_membership_from_dict = DomainMembership.from_dict(domain_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


