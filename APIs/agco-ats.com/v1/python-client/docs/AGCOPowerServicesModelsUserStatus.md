# AGCOPowerServicesModelsUserStatus

Status of a voucher in the AGCO Power system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealer_code** | **str** | The dealer code of the voucher | 
**state** | **str** | The state of the voucher | [optional] 
**voucher_code** | **str** | The voucher code | 

## Example

```python
from openapi_client.models.agco_power_services_models_user_status import AGCOPowerServicesModelsUserStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AGCOPowerServicesModelsUserStatus from a JSON string
agco_power_services_models_user_status_instance = AGCOPowerServicesModelsUserStatus.from_json(json)
# print the JSON string representation of the object
print(AGCOPowerServicesModelsUserStatus.to_json())

# convert the object into a dict
agco_power_services_models_user_status_dict = agco_power_services_models_user_status_instance.to_dict()
# create an instance of AGCOPowerServicesModelsUserStatus from a dict
agco_power_services_models_user_status_from_dict = AGCOPowerServicesModelsUserStatus.from_dict(agco_power_services_models_user_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


