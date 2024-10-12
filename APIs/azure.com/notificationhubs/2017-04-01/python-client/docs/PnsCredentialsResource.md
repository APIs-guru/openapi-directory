# PnsCredentialsResource

Description of a NotificationHub PNS Credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PnsCredentialsProperties**](PnsCredentialsProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.pns_credentials_resource import PnsCredentialsResource

# TODO update the JSON string below
json = "{}"
# create an instance of PnsCredentialsResource from a JSON string
pns_credentials_resource_instance = PnsCredentialsResource.from_json(json)
# print the JSON string representation of the object
print(PnsCredentialsResource.to_json())

# convert the object into a dict
pns_credentials_resource_dict = pns_credentials_resource_instance.to_dict()
# create an instance of PnsCredentialsResource from a dict
pns_credentials_resource_from_dict = PnsCredentialsResource.from_dict(pns_credentials_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


