# LiaInventorySettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_verification_contact_email** | **str** | The email of the contact for the inventory verification process. | [optional] 
**inventory_verification_contact_name** | **str** | The name of the contact for the inventory verification process. | [optional] 
**inventory_verification_contact_status** | **str** | The status of the verification contact. Acceptable values are: - \&quot;&#x60;active&#x60;\&quot; - \&quot;&#x60;inactive&#x60;\&quot; - \&quot;&#x60;pending&#x60;\&quot;  | [optional] 
**status** | **str** | The status of the inventory verification process. Acceptable values are: - \&quot;&#x60;active&#x60;\&quot; - \&quot;&#x60;inactive&#x60;\&quot; - \&quot;&#x60;pending&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.lia_inventory_settings import LiaInventorySettings

# TODO update the JSON string below
json = "{}"
# create an instance of LiaInventorySettings from a JSON string
lia_inventory_settings_instance = LiaInventorySettings.from_json(json)
# print the JSON string representation of the object
print(LiaInventorySettings.to_json())

# convert the object into a dict
lia_inventory_settings_dict = lia_inventory_settings_instance.to_dict()
# create an instance of LiaInventorySettings from a dict
lia_inventory_settings_from_dict = LiaInventorySettings.from_dict(lia_inventory_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


