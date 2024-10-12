# PublicIPAddress

PublicIPAddress resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated | [optional] 
**properties** | [**PublicIPAddressPropertiesFormat**](PublicIPAddressPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.public_ip_address import PublicIPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPAddress from a JSON string
public_ip_address_instance = PublicIPAddress.from_json(json)
# print the JSON string representation of the object
print(PublicIPAddress.to_json())

# convert the object into a dict
public_ip_address_dict = public_ip_address_instance.to_dict()
# create an instance of PublicIPAddress from a dict
public_ip_address_from_dict = PublicIPAddress.from_dict(public_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


