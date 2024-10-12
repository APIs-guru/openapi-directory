# FedexSettingsResponseBody

A Fedex settings response body

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
from openapi_client.models.fedex_settings_response_body import FedexSettingsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of FedexSettingsResponseBody from a JSON string
fedex_settings_response_body_instance = FedexSettingsResponseBody.from_json(json)
# print the JSON string representation of the object
print(FedexSettingsResponseBody.to_json())

# convert the object into a dict
fedex_settings_response_body_dict = fedex_settings_response_body_instance.to_dict()
# create an instance of FedexSettingsResponseBody from a dict
fedex_settings_response_body_from_dict = FedexSettingsResponseBody.from_dict(fedex_settings_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


