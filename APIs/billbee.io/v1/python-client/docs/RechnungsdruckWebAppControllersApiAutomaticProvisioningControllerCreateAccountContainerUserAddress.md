# RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress

Represents the invoice address of a Billbee user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **str** |  | [optional] 
**address2** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**company** | **str** |  | [optional] 
**country** | **str** | The ISO2 country code of the users country | [optional] 
**name** | **str** |  | [optional] 
**vat_id** | **str** |  | [optional] 
**zip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_user_address import RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress

# TODO update the JSON string below
json = "{}"
# create an instance of RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress from a JSON string
rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_user_address_instance = RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress.from_json(json)
# print the JSON string representation of the object
print(RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress.to_json())

# convert the object into a dict
rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_user_address_dict = rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_user_address_instance.to_dict()
# create an instance of RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress from a dict
rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_user_address_from_dict = RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress.from_dict(rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container_user_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


