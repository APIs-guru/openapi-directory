# QueuedProvisioning

QueuedProvisioning defines the queued provisioning used by the node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API. | [optional] 

## Example

```python
from openapi_client.models.queued_provisioning import QueuedProvisioning

# TODO update the JSON string below
json = "{}"
# create an instance of QueuedProvisioning from a JSON string
queued_provisioning_instance = QueuedProvisioning.from_json(json)
# print the JSON string representation of the object
print(QueuedProvisioning.to_json())

# convert the object into a dict
queued_provisioning_dict = queued_provisioning_instance.to_dict()
# create an instance of QueuedProvisioning from a dict
queued_provisioning_from_dict = QueuedProvisioning.from_dict(queued_provisioning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


