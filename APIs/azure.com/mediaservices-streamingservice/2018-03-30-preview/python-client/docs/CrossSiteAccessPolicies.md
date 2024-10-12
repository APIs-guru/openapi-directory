# CrossSiteAccessPolicies

The client access policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_access_policy** | **str** | The content of clientaccesspolicy.xml used by Silverlight. | [optional] 
**cross_domain_policy** | **str** | The content of crossdomain.xml used by Silverlight. | [optional] 

## Example

```python
from openapi_client.models.cross_site_access_policies import CrossSiteAccessPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of CrossSiteAccessPolicies from a JSON string
cross_site_access_policies_instance = CrossSiteAccessPolicies.from_json(json)
# print the JSON string representation of the object
print(CrossSiteAccessPolicies.to_json())

# convert the object into a dict
cross_site_access_policies_dict = cross_site_access_policies_instance.to_dict()
# create an instance of CrossSiteAccessPolicies from a dict
cross_site_access_policies_from_dict = CrossSiteAccessPolicies.from_dict(cross_site_access_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


