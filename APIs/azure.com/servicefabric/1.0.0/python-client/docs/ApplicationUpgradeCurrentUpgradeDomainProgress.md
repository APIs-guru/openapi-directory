# ApplicationUpgradeCurrentUpgradeDomainProgress

The progress of the current upgrade domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** |  | [optional] 
**node_upgrade_progress_list** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_upgrade_current_upgrade_domain_progress import ApplicationUpgradeCurrentUpgradeDomainProgress

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradeCurrentUpgradeDomainProgress from a JSON string
application_upgrade_current_upgrade_domain_progress_instance = ApplicationUpgradeCurrentUpgradeDomainProgress.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradeCurrentUpgradeDomainProgress.to_json())

# convert the object into a dict
application_upgrade_current_upgrade_domain_progress_dict = application_upgrade_current_upgrade_domain_progress_instance.to_dict()
# create an instance of ApplicationUpgradeCurrentUpgradeDomainProgress from a dict
application_upgrade_current_upgrade_domain_progress_from_dict = ApplicationUpgradeCurrentUpgradeDomainProgress.from_dict(application_upgrade_current_upgrade_domain_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


