# FailureUpgradeDomainProgressInfo

Information about the upgrade domain progress at the time of upgrade failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The name of the upgrade domain | [optional] 
**node_upgrade_progress_list** | [**List[NodeUpgradeProgressInfo]**](NodeUpgradeProgressInfo.md) | List of upgrading nodes and their statuses | [optional] 

## Example

```python
from openapi_client.models.failure_upgrade_domain_progress_info import FailureUpgradeDomainProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FailureUpgradeDomainProgressInfo from a JSON string
failure_upgrade_domain_progress_info_instance = FailureUpgradeDomainProgressInfo.from_json(json)
# print the JSON string representation of the object
print(FailureUpgradeDomainProgressInfo.to_json())

# convert the object into a dict
failure_upgrade_domain_progress_info_dict = failure_upgrade_domain_progress_info_instance.to_dict()
# create an instance of FailureUpgradeDomainProgressInfo from a dict
failure_upgrade_domain_progress_info_from_dict = FailureUpgradeDomainProgressInfo.from_dict(failure_upgrade_domain_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


