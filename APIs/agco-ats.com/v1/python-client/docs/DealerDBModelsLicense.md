# DealerDBModelsLicense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | True if license is active. | [optional] 
**created_date** | **datetime** | The date the license was created. | [optional] 
**deactivated_date** | **datetime** | The date the license was deactivated. | [optional] 
**license_activation_type** | **str** | The type of license (e.g. EDT, EDT Lite) | [optional] 
**license_id** | **str** | The LicenseID | [optional] 
**license_version** | **str** | The version of the license. | [optional] 
**refresh_date** | **datetime** | The date the license was refreshed. | [optional] 
**system_info** | **str** | Information about the system which is licensed. | [optional] 
**updated_license_version** | **str** | The updated version of the license.  A value in this field indicates that the update has not been confirmed. | [optional] 
**voucher_code** | **str** | The voucher code that generated the license. | [optional] 

## Example

```python
from openapi_client.models.dealer_db_models_license import DealerDBModelsLicense

# TODO update the JSON string below
json = "{}"
# create an instance of DealerDBModelsLicense from a JSON string
dealer_db_models_license_instance = DealerDBModelsLicense.from_json(json)
# print the JSON string representation of the object
print(DealerDBModelsLicense.to_json())

# convert the object into a dict
dealer_db_models_license_dict = dealer_db_models_license_instance.to_dict()
# create an instance of DealerDBModelsLicense from a dict
dealer_db_models_license_from_dict = DealerDBModelsLicense.from_dict(dealer_db_models_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


