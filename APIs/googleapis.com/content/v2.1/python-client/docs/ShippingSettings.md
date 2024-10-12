# ShippingSettings

The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses. | [optional] 
**postal_code_groups** | [**List[PostalCodeGroup]**](PostalCodeGroup.md) | A list of postal code groups that can be referred to in &#x60;services&#x60;. Optional. | [optional] 
**services** | [**List[Service]**](Service.md) | The target account&#39;s list of services. Optional. | [optional] 
**warehouses** | [**List[Warehouse]**](Warehouse.md) | Optional. A list of warehouses which can be referred to in &#x60;services&#x60;. | [optional] 

## Example

```python
from openapi_client.models.shipping_settings import ShippingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingSettings from a JSON string
shipping_settings_instance = ShippingSettings.from_json(json)
# print the JSON string representation of the object
print(ShippingSettings.to_json())

# convert the object into a dict
shipping_settings_dict = shipping_settings_instance.to_dict()
# create an instance of ShippingSettings from a dict
shipping_settings_from_dict = ShippingSettings.from_dict(shipping_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


