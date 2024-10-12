# ServiceEndpointPoliciesUpdateRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.service_endpoint_policies_update_request import ServiceEndpointPoliciesUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceEndpointPoliciesUpdateRequest from a JSON string
service_endpoint_policies_update_request_instance = ServiceEndpointPoliciesUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ServiceEndpointPoliciesUpdateRequest.to_json())

# convert the object into a dict
service_endpoint_policies_update_request_dict = service_endpoint_policies_update_request_instance.to_dict()
# create an instance of ServiceEndpointPoliciesUpdateRequest from a dict
service_endpoint_policies_update_request_from_dict = ServiceEndpointPoliciesUpdateRequest.from_dict(service_endpoint_policies_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


