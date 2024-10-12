# ServiceUpgradeProgress

Information about how many replicas are completed or pending for a specific service during upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_replica_count** | **str** | The number of replicas that completes the upgrade in the service. | [optional] 
**pending_replica_count** | **str** | The number of replicas that are waiting to be upgraded in the service. | [optional] 
**service_name** | **str** | Name of the Service resource. | [optional] 

## Example

```python
from openapi_client.models.service_upgrade_progress import ServiceUpgradeProgress

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceUpgradeProgress from a JSON string
service_upgrade_progress_instance = ServiceUpgradeProgress.from_json(json)
# print the JSON string representation of the object
print(ServiceUpgradeProgress.to_json())

# convert the object into a dict
service_upgrade_progress_dict = service_upgrade_progress_instance.to_dict()
# create an instance of ServiceUpgradeProgress from a dict
service_upgrade_progress_from_dict = ServiceUpgradeProgress.from_dict(service_upgrade_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


