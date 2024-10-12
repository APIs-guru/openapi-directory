# RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer

Data used to create a new Billbee user account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_terms** | **bool** | Set to true, if the user has accepted the Billbee terms &amp;amp; conditions | [optional] 
**address** | [**RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress**](RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress.md) |  | [optional] 
**affiliate_coupon_code** | **str** | Specifies an billbee affiliate code to attach to the user | [optional] 
**default_currrency** | **str** | Optionally specify the default currency of the user | [optional] 
**default_vat_index** | **int** | Optionally specify the default vat index of the user | [optional] 
**default_vat_mode** | **int** | Optionally specify the default vat mode of the user | [optional] 
**e_mail** | **str** | The Email address of the user to create | 
**password** | **str** |  | [optional] 
**vat1_rate** | **float** | Optionally specify the vat1 (normal) rate of the user | [optional] 
**vat2_rate** | **float** | Optionally specify the vat2 (reduced) rate of the user | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container import RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer from a JSON string
rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_instance = RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_dict = rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer from a dict
rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_from_dict = RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer.from_dict(rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


