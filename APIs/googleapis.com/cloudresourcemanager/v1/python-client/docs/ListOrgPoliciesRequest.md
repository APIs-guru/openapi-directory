# ListOrgPoliciesRequest

The request sent to the ListOrgPolicies method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size. | [optional] 
**page_token** | **str** | Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field. | [optional] 

## Example

```python
from openapi_client.models.list_org_policies_request import ListOrgPoliciesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrgPoliciesRequest from a JSON string
list_org_policies_request_instance = ListOrgPoliciesRequest.from_json(json)
# print the JSON string representation of the object
print(ListOrgPoliciesRequest.to_json())

# convert the object into a dict
list_org_policies_request_dict = list_org_policies_request_instance.to_dict()
# create an instance of ListOrgPoliciesRequest from a dict
list_org_policies_request_from_dict = ListOrgPoliciesRequest.from_dict(list_org_policies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


