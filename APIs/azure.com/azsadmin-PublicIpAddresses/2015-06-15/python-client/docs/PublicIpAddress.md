# PublicIpAddress

This resource represents an IP Address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PublicIPAddressProperties**](PublicIPAddressProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Region location of resource. | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.public_ip_address import PublicIpAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIpAddress from a JSON string
public_ip_address_instance = PublicIpAddress.from_json(json)
# print the JSON string representation of the object
print(PublicIpAddress.to_json())

# convert the object into a dict
public_ip_address_dict = public_ip_address_instance.to_dict()
# create an instance of PublicIpAddress from a dict
public_ip_address_from_dict = PublicIpAddress.from_dict(public_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


