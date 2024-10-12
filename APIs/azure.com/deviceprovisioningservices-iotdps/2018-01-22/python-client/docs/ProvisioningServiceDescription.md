# ProvisioningServiceDescription

The description of the provisioning service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. | [optional] 
**properties** | [**IotDpsPropertiesDescription**](IotDpsPropertiesDescription.md) |  | 
**sku** | [**IotDpsSkuInfo**](IotDpsSkuInfo.md) |  | 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**location** | **str** | The resource location. | 
**name** | **str** | The resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.provisioning_service_description import ProvisioningServiceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningServiceDescription from a JSON string
provisioning_service_description_instance = ProvisioningServiceDescription.from_json(json)
# print the JSON string representation of the object
print(ProvisioningServiceDescription.to_json())

# convert the object into a dict
provisioning_service_description_dict = provisioning_service_description_instance.to_dict()
# create an instance of ProvisioningServiceDescription from a dict
provisioning_service_description_from_dict = ProvisioningServiceDescription.from_dict(provisioning_service_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


