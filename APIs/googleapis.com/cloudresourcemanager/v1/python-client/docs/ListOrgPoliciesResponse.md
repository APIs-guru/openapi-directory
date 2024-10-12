# ListOrgPoliciesResponse

The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. | [optional] 
**policies** | [**List[OrgPolicy]**](OrgPolicy.md) | The &#x60;Policies&#x60; that are set on the resource. It will be empty if no &#x60;Policies&#x60; are set. | [optional] 

## Example

```python
from openapi_client.models.list_org_policies_response import ListOrgPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrgPoliciesResponse from a JSON string
list_org_policies_response_instance = ListOrgPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListOrgPoliciesResponse.to_json())

# convert the object into a dict
list_org_policies_response_dict = list_org_policies_response_instance.to_dict()
# create an instance of ListOrgPoliciesResponse from a dict
list_org_policies_response_from_dict = ListOrgPoliciesResponse.from_dict(list_org_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


