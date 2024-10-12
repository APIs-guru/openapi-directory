# GetOrganizationInventoryDevices200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claimed_at** | **datetime** | Claimed time of the device | [optional] 
**license_expiration_date** | **datetime** | License expiration date of the device | [optional] 
**mac** | **str** | MAC address of the device | [optional] 
**model** | **str** | Model type of the device | [optional] 
**name** | **str** | Name of the device | [optional] 
**network_id** | **str** | Network Id of the device | [optional] 
**order_number** | **str** | Order number of the device | [optional] 
**product_type** | **str** | Product type of the device | [optional] 
**serial** | **str** | Serial number of the device | [optional] 
**tags** | **List[str]** | Device tags | [optional] 

## Example

```python
from openapi_client.models.get_organization_inventory_devices200_response_inner import GetOrganizationInventoryDevices200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationInventoryDevices200ResponseInner from a JSON string
get_organization_inventory_devices200_response_inner_instance = GetOrganizationInventoryDevices200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationInventoryDevices200ResponseInner.to_json())

# convert the object into a dict
get_organization_inventory_devices200_response_inner_dict = get_organization_inventory_devices200_response_inner_instance.to_dict()
# create an instance of GetOrganizationInventoryDevices200ResponseInner from a dict
get_organization_inventory_devices200_response_inner_from_dict = GetOrganizationInventoryDevices200ResponseInner.from_dict(get_organization_inventory_devices200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


