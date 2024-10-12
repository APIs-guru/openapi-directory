# PrivateAccessSubnet

Description of a Virtual Network subnet that is useable for private site access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **int** | The key (ID) of the subnet. | [optional] 
**name** | **str** | The name of the subnet. | [optional] 

## Example

```python
from openapi_client.models.private_access_subnet import PrivateAccessSubnet

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateAccessSubnet from a JSON string
private_access_subnet_instance = PrivateAccessSubnet.from_json(json)
# print the JSON string representation of the object
print(PrivateAccessSubnet.to_json())

# convert the object into a dict
private_access_subnet_dict = private_access_subnet_instance.to_dict()
# create an instance of PrivateAccessSubnet from a dict
private_access_subnet_from_dict = PrivateAccessSubnet.from_dict(private_access_subnet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


