# DealerDBModelsLicenseActivationCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealer_code** | **str** | The Dealer Code of the dealer activating the license | 
**license_activation_type** | **str** | The type of license to create (e.g. EDT, EDT Lite) | [optional] 
**postal_code** | **str** | The dealer&#39;s postal code (zip code) | 
**system_info** | **str** | Information about  the system being activated | 
**voucher_code** | **str** | The Voucher Code to use for activation | 

## Example

```python
from openapi_client.models.dealer_db_models_license_activation_create import DealerDBModelsLicenseActivationCreate

# TODO update the JSON string below
json = "{}"
# create an instance of DealerDBModelsLicenseActivationCreate from a JSON string
dealer_db_models_license_activation_create_instance = DealerDBModelsLicenseActivationCreate.from_json(json)
# print the JSON string representation of the object
print(DealerDBModelsLicenseActivationCreate.to_json())

# convert the object into a dict
dealer_db_models_license_activation_create_dict = dealer_db_models_license_activation_create_instance.to_dict()
# create an instance of DealerDBModelsLicenseActivationCreate from a dict
dealer_db_models_license_activation_create_from_dict = DealerDBModelsLicenseActivationCreate.from_dict(dealer_db_models_license_activation_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


