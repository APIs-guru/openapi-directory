# ExternalSubnet

Subnet information as returned by the Microsoft.Network API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the identifier. | [optional] 
**name** | **str** | Gets or sets the name. | [optional] 

## Example

```python
from openapi_client.models.external_subnet import ExternalSubnet

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSubnet from a JSON string
external_subnet_instance = ExternalSubnet.from_json(json)
# print the JSON string representation of the object
print(ExternalSubnet.to_json())

# convert the object into a dict
external_subnet_dict = external_subnet_instance.to_dict()
# create an instance of ExternalSubnet from a dict
external_subnet_from_dict = ExternalSubnet.from_dict(external_subnet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


