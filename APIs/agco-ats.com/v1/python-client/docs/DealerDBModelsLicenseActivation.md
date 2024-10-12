# DealerDBModelsLicenseActivation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The license key in base64 format.  This is only provided when the LicenseData is a new license. | [optional] 
**license_data** | **str** | The license data in base64 format. | [optional] 

## Example

```python
from openapi_client.models.dealer_db_models_license_activation import DealerDBModelsLicenseActivation

# TODO update the JSON string below
json = "{}"
# create an instance of DealerDBModelsLicenseActivation from a JSON string
dealer_db_models_license_activation_instance = DealerDBModelsLicenseActivation.from_json(json)
# print the JSON string representation of the object
print(DealerDBModelsLicenseActivation.to_json())

# convert the object into a dict
dealer_db_models_license_activation_dict = dealer_db_models_license_activation_instance.to_dict()
# create an instance of DealerDBModelsLicenseActivation from a dict
dealer_db_models_license_activation_from_dict = DealerDBModelsLicenseActivation.from_dict(dealer_db_models_license_activation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


