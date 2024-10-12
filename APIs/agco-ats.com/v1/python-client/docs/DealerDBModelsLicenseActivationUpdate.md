# DealerDBModelsLicenseActivationUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license_version** | **str** | The license version to update | 
**system_info** | **str** | Information about  the system being activated | [optional] 

## Example

```python
from openapi_client.models.dealer_db_models_license_activation_update import DealerDBModelsLicenseActivationUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DealerDBModelsLicenseActivationUpdate from a JSON string
dealer_db_models_license_activation_update_instance = DealerDBModelsLicenseActivationUpdate.from_json(json)
# print the JSON string representation of the object
print(DealerDBModelsLicenseActivationUpdate.to_json())

# convert the object into a dict
dealer_db_models_license_activation_update_dict = dealer_db_models_license_activation_update_instance.to_dict()
# create an instance of DealerDBModelsLicenseActivationUpdate from a dict
dealer_db_models_license_activation_update_from_dict = DealerDBModelsLicenseActivationUpdate.from_dict(dealer_db_models_license_activation_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


