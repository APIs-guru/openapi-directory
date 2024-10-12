# WorkloadCertificates

Configuration for issuance of mTLS keys and certificates to Kubernetes pods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_certificates** | **bool** | enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty). | [optional] 

## Example

```python
from openapi_client.models.workload_certificates import WorkloadCertificates

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadCertificates from a JSON string
workload_certificates_instance = WorkloadCertificates.from_json(json)
# print the JSON string representation of the object
print(WorkloadCertificates.to_json())

# convert the object into a dict
workload_certificates_dict = workload_certificates_instance.to_dict()
# create an instance of WorkloadCertificates from a dict
workload_certificates_from_dict = WorkloadCertificates.from_dict(workload_certificates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


