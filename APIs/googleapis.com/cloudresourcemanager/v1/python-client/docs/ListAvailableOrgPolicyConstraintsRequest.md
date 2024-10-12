# ListAvailableOrgPolicyConstraintsRequest

The request sent to the `ListAvailableOrgPolicyConstraints` method on the project, folder, or organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. | [optional] 
**page_token** | **str** | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. | [optional] 

## Example

```python
from openapi_client.models.list_available_org_policy_constraints_request import ListAvailableOrgPolicyConstraintsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListAvailableOrgPolicyConstraintsRequest from a JSON string
list_available_org_policy_constraints_request_instance = ListAvailableOrgPolicyConstraintsRequest.from_json(json)
# print the JSON string representation of the object
print(ListAvailableOrgPolicyConstraintsRequest.to_json())

# convert the object into a dict
list_available_org_policy_constraints_request_dict = list_available_org_policy_constraints_request_instance.to_dict()
# create an instance of ListAvailableOrgPolicyConstraintsRequest from a dict
list_available_org_policy_constraints_request_from_dict = ListAvailableOrgPolicyConstraintsRequest.from_dict(list_available_org_policy_constraints_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


