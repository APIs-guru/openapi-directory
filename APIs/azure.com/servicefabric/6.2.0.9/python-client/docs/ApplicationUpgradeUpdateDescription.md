# ApplicationUpgradeUpdateDescription

Describes the parameters for updating an ongoing application upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md) |  | [optional] 
**name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | 
**update_description** | [**RollingUpgradeUpdateDescription**](RollingUpgradeUpdateDescription.md) |  | [optional] 
**upgrade_kind** | [**UpgradeKind**](UpgradeKind.md) |  | [default to UpgradeKind.ROLLING]

## Example

```python
from openapi_client.models.application_upgrade_update_description import ApplicationUpgradeUpdateDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradeUpdateDescription from a JSON string
application_upgrade_update_description_instance = ApplicationUpgradeUpdateDescription.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradeUpdateDescription.to_json())

# convert the object into a dict
application_upgrade_update_description_dict = application_upgrade_update_description_instance.to_dict()
# create an instance of ApplicationUpgradeUpdateDescription from a dict
application_upgrade_update_description_from_dict = ApplicationUpgradeUpdateDescription.from_dict(application_upgrade_update_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


