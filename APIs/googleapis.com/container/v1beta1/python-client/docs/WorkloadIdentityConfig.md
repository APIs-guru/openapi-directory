# WorkloadIdentityConfig

Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_namespace** | **str** | IAM Identity Namespace to attach all Kubernetes Service Accounts to. | [optional] 
**identity_provider** | **str** | identity provider is the third party identity provider. | [optional] 
**workload_pool** | **str** | The workload pool to attach all Kubernetes service accounts to. | [optional] 

## Example

```python
from openapi_client.models.workload_identity_config import WorkloadIdentityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadIdentityConfig from a JSON string
workload_identity_config_instance = WorkloadIdentityConfig.from_json(json)
# print the JSON string representation of the object
print(WorkloadIdentityConfig.to_json())

# convert the object into a dict
workload_identity_config_dict = workload_identity_config_instance.to_dict()
# create an instance of WorkloadIdentityConfig from a dict
workload_identity_config_from_dict = WorkloadIdentityConfig.from_dict(workload_identity_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


