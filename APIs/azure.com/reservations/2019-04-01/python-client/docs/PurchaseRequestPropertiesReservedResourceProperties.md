# PurchaseRequestPropertiesReservedResourceProperties

Properties specific to each reserved resource type. Not required if not applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_flexibility** | [**InstanceFlexibility**](InstanceFlexibility.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_request_properties_reserved_resource_properties import PurchaseRequestPropertiesReservedResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseRequestPropertiesReservedResourceProperties from a JSON string
purchase_request_properties_reserved_resource_properties_instance = PurchaseRequestPropertiesReservedResourceProperties.from_json(json)
# print the JSON string representation of the object
print(PurchaseRequestPropertiesReservedResourceProperties.to_json())

# convert the object into a dict
purchase_request_properties_reserved_resource_properties_dict = purchase_request_properties_reserved_resource_properties_instance.to_dict()
# create an instance of PurchaseRequestPropertiesReservedResourceProperties from a dict
purchase_request_properties_reserved_resource_properties_from_dict = PurchaseRequestPropertiesReservedResourceProperties.from_dict(purchase_request_properties_reserved_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


