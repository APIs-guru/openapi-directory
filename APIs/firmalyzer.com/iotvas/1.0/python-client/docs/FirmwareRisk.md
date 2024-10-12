# FirmwareRisk


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**risk_summary** | [**RiskSummary**](RiskSummary.md) |  | [optional] 
**vulnerable_components** | [**List[VulnerableComponent]**](VulnerableComponent.md) |  | [optional] 

## Example

```python
from openapi_client.models.firmware_risk import FirmwareRisk

# TODO update the JSON string below
json = "{}"
# create an instance of FirmwareRisk from a JSON string
firmware_risk_instance = FirmwareRisk.from_json(json)
# print the JSON string representation of the object
print(FirmwareRisk.to_json())

# convert the object into a dict
firmware_risk_dict = firmware_risk_instance.to_dict()
# create an instance of FirmwareRisk from a dict
firmware_risk_from_dict = FirmwareRisk.from_dict(firmware_risk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


