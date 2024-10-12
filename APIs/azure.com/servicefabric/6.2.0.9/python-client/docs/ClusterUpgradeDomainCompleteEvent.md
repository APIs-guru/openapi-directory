# ClusterUpgradeDomainCompleteEvent

Cluster Upgrade Domain Complete event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_cluster_version** | **str** | Target Cluster version. | 
**upgrade_domain_elapsed_time_in_ms** | **float** | Duration of domain upgrade in milli-seconds. | 
**upgrade_domains** | **str** | Upgrade domains. | 
**upgrade_state** | **str** | State of upgrade. | 

## Example

```python
from openapi_client.models.cluster_upgrade_domain_complete_event import ClusterUpgradeDomainCompleteEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeDomainCompleteEvent from a JSON string
cluster_upgrade_domain_complete_event_instance = ClusterUpgradeDomainCompleteEvent.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeDomainCompleteEvent.to_json())

# convert the object into a dict
cluster_upgrade_domain_complete_event_dict = cluster_upgrade_domain_complete_event_instance.to_dict()
# create an instance of ClusterUpgradeDomainCompleteEvent from a dict
cluster_upgrade_domain_complete_event_from_dict = ClusterUpgradeDomainCompleteEvent.from_dict(cluster_upgrade_domain_complete_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


