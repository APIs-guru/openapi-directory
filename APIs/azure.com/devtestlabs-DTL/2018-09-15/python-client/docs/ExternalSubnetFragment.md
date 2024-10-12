# ExternalSubnetFragment

Subnet information as returned by the Microsoft.Network API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the identifier. | [optional] 
**name** | **str** | Gets or sets the name. | [optional] 

## Example

```python
from openapi_client.models.external_subnet_fragment import ExternalSubnetFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalSubnetFragment from a JSON string
external_subnet_fragment_instance = ExternalSubnetFragment.from_json(json)
# print the JSON string representation of the object
print(ExternalSubnetFragment.to_json())

# convert the object into a dict
external_subnet_fragment_dict = external_subnet_fragment_instance.to_dict()
# create an instance of ExternalSubnetFragment from a dict
external_subnet_fragment_from_dict = ExternalSubnetFragment.from_dict(external_subnet_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


