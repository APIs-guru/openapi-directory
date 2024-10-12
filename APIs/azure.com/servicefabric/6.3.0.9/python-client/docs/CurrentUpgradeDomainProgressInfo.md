# CurrentUpgradeDomainProgressInfo

Information about the current in-progress upgrade domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The name of the upgrade domain | [optional] 
**node_upgrade_progress_list** | [**List[NodeUpgradeProgressInfo]**](NodeUpgradeProgressInfo.md) | List of upgrading nodes and their statuses | [optional] 

## Example

```python
from openapi_client.models.current_upgrade_domain_progress_info import CurrentUpgradeDomainProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentUpgradeDomainProgressInfo from a JSON string
current_upgrade_domain_progress_info_instance = CurrentUpgradeDomainProgressInfo.from_json(json)
# print the JSON string representation of the object
print(CurrentUpgradeDomainProgressInfo.to_json())

# convert the object into a dict
current_upgrade_domain_progress_info_dict = current_upgrade_domain_progress_info_instance.to_dict()
# create an instance of CurrentUpgradeDomainProgressInfo from a dict
current_upgrade_domain_progress_info_from_dict = CurrentUpgradeDomainProgressInfo.from_dict(current_upgrade_domain_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


