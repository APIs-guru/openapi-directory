# FailedUpgradeDomainProgressObject

The detailed upgrade progress for nodes in the current upgrade domain at the point of failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The name of the upgrade domain | [optional] 
**node_upgrade_progress_list** | [**List[NodeUpgradeProgressInfo]**](NodeUpgradeProgressInfo.md) | List of upgrading nodes and their statuses | [optional] 

## Example

```python
from openapi_client.models.failed_upgrade_domain_progress_object import FailedUpgradeDomainProgressObject

# TODO update the JSON string below
json = "{}"
# create an instance of FailedUpgradeDomainProgressObject from a JSON string
failed_upgrade_domain_progress_object_instance = FailedUpgradeDomainProgressObject.from_json(json)
# print the JSON string representation of the object
print(FailedUpgradeDomainProgressObject.to_json())

# convert the object into a dict
failed_upgrade_domain_progress_object_dict = failed_upgrade_domain_progress_object_instance.to_dict()
# create an instance of FailedUpgradeDomainProgressObject from a dict
failed_upgrade_domain_progress_object_from_dict = FailedUpgradeDomainProgressObject.from_dict(failed_upgrade_domain_progress_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


