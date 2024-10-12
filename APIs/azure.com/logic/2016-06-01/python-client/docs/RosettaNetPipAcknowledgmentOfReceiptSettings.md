# RosettaNetPipAcknowledgmentOfReceiptSettings

The integration account RosettaNet ProcessConfiguration Acknowledgement settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_non_repudiation_required** | **bool** | The non-repudiation is required or not. | 
**time_to_acknowledge_in_seconds** | **int** | The time to acknowledge in seconds. | 

## Example

```python
from openapi_client.models.rosetta_net_pip_acknowledgment_of_receipt_settings import RosettaNetPipAcknowledgmentOfReceiptSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RosettaNetPipAcknowledgmentOfReceiptSettings from a JSON string
rosetta_net_pip_acknowledgment_of_receipt_settings_instance = RosettaNetPipAcknowledgmentOfReceiptSettings.from_json(json)
# print the JSON string representation of the object
print(RosettaNetPipAcknowledgmentOfReceiptSettings.to_json())

# convert the object into a dict
rosetta_net_pip_acknowledgment_of_receipt_settings_dict = rosetta_net_pip_acknowledgment_of_receipt_settings_instance.to_dict()
# create an instance of RosettaNetPipAcknowledgmentOfReceiptSettings from a dict
rosetta_net_pip_acknowledgment_of_receipt_settings_from_dict = RosettaNetPipAcknowledgmentOfReceiptSettings.from_dict(rosetta_net_pip_acknowledgment_of_receipt_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


