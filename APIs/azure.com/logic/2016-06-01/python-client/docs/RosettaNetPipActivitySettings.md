# RosettaNetPipActivitySettings

The integration account RosettaNet ProcessConfiguration activity settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgment_of_receipt_settings** | [**RosettaNetPipAcknowledgmentOfReceiptSettings**](RosettaNetPipAcknowledgmentOfReceiptSettings.md) |  | 
**activity_behavior** | [**RosettaNetPipActivityBehavior**](RosettaNetPipActivityBehavior.md) |  | 
**activity_type** | [**RosettaNetPipActivityType**](RosettaNetPipActivityType.md) |  | 

## Example

```python
from openapi_client.models.rosetta_net_pip_activity_settings import RosettaNetPipActivitySettings

# TODO update the JSON string below
json = "{}"
# create an instance of RosettaNetPipActivitySettings from a JSON string
rosetta_net_pip_activity_settings_instance = RosettaNetPipActivitySettings.from_json(json)
# print the JSON string representation of the object
print(RosettaNetPipActivitySettings.to_json())

# convert the object into a dict
rosetta_net_pip_activity_settings_dict = rosetta_net_pip_activity_settings_instance.to_dict()
# create an instance of RosettaNetPipActivitySettings from a dict
rosetta_net_pip_activity_settings_from_dict = RosettaNetPipActivitySettings.from_dict(rosetta_net_pip_activity_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


