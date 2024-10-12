# UpgradePolicy

Describes an upgrade policy - automatic or manual.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Specifies the mode of an upgrade to virtual machines in the scale set.&lt;br /&gt;&lt;br /&gt; Possible values are:&lt;br /&gt;&lt;br /&gt; **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.&lt;br /&gt;&lt;br /&gt; **Automatic** - All virtual machines in the scale set are  automatically updated at the same time. | [optional] 

## Example

```python
from openapi_client.models.upgrade_policy import UpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradePolicy from a JSON string
upgrade_policy_instance = UpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(UpgradePolicy.to_json())

# convert the object into a dict
upgrade_policy_dict = upgrade_policy_instance.to_dict()
# create an instance of UpgradePolicy from a dict
upgrade_policy_from_dict = UpgradePolicy.from_dict(upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


