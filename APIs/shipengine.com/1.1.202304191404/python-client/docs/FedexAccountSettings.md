# FedexAccountSettings

A Fedex account settings request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary_account** | **bool** |  | [optional] 
**letterhead_image** | **str** |  | [optional] 
**nickname** | **str** | Account nickname | [optional] 
**pickup_type** | [**FedexPickupType**](FedexPickupType.md) |  | [optional] 
**signature_image** | **str** |  | [optional] 
**smart_post_endorsement** | [**AncillaryServiceEndorsement**](AncillaryServiceEndorsement.md) |  | [optional] 
**smart_post_hub** | [**SmartPostHub**](SmartPostHub.md) |  | [optional] 

## Example

```python
from openapi_client.models.fedex_account_settings import FedexAccountSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FedexAccountSettings from a JSON string
fedex_account_settings_instance = FedexAccountSettings.from_json(json)
# print the JSON string representation of the object
print(FedexAccountSettings.to_json())

# convert the object into a dict
fedex_account_settings_dict = fedex_account_settings_instance.to_dict()
# create an instance of FedexAccountSettings from a dict
fedex_account_settings_from_dict = FedexAccountSettings.from_dict(fedex_account_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


