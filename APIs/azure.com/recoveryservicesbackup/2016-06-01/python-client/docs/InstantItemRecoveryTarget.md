# InstantItemRecoveryTarget

Target details for the file or folder restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_scripts** | [**List[ClientScriptForConnect]**](ClientScriptForConnect.md) | List of client scripts. | [optional] 

## Example

```python
from openapi_client.models.instant_item_recovery_target import InstantItemRecoveryTarget

# TODO update the JSON string below
json = "{}"
# create an instance of InstantItemRecoveryTarget from a JSON string
instant_item_recovery_target_instance = InstantItemRecoveryTarget.from_json(json)
# print the JSON string representation of the object
print(InstantItemRecoveryTarget.to_json())

# convert the object into a dict
instant_item_recovery_target_dict = instant_item_recovery_target_instance.to_dict()
# create an instance of InstantItemRecoveryTarget from a dict
instant_item_recovery_target_from_dict = InstantItemRecoveryTarget.from_dict(instant_item_recovery_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


