# ListInstanceOSPoliciesCompliancesResponse

A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_os_policies_compliances** | [**List[InstanceOSPoliciesCompliance]**](InstanceOSPoliciesCompliance.md) | List of instance OS policies compliance objects. | [optional] 
**next_page_token** | **str** | The pagination token to retrieve the next page of instance OS policies compliance objects. | [optional] 

## Example

```python
from openapi_client.models.list_instance_os_policies_compliances_response import ListInstanceOSPoliciesCompliancesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInstanceOSPoliciesCompliancesResponse from a JSON string
list_instance_os_policies_compliances_response_instance = ListInstanceOSPoliciesCompliancesResponse.from_json(json)
# print the JSON string representation of the object
print(ListInstanceOSPoliciesCompliancesResponse.to_json())

# convert the object into a dict
list_instance_os_policies_compliances_response_dict = list_instance_os_policies_compliances_response_instance.to_dict()
# create an instance of ListInstanceOSPoliciesCompliancesResponse from a dict
list_instance_os_policies_compliances_response_from_dict = ListInstanceOSPoliciesCompliancesResponse.from_dict(list_instance_os_policies_compliances_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


