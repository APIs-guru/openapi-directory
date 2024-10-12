# OrganizationLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | **str** | URI of resource. | [optional] [readonly] 
**dashboards** | **str** | URI of resource. | [optional] [readonly] 
**labels** | **str** | URI of resource. | [optional] [readonly] 
**members** | **str** | URI of resource. | [optional] [readonly] 
**owners** | **str** | URI of resource. | [optional] [readonly] 
**secrets** | **str** | URI of resource. | [optional] [readonly] 
**var_self** | **str** | URI of resource. | [optional] [readonly] 
**tasks** | **str** | URI of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.organization_links import OrganizationLinks

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationLinks from a JSON string
organization_links_instance = OrganizationLinks.from_json(json)
# print the JSON string representation of the object
print(OrganizationLinks.to_json())

# convert the object into a dict
organization_links_dict = organization_links_instance.to_dict()
# create an instance of OrganizationLinks from a dict
organization_links_from_dict = OrganizationLinks.from_dict(organization_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


