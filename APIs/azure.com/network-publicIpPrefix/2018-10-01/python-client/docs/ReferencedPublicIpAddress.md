# ReferencedPublicIpAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The PublicIPAddress Reference | [optional] 

## Example

```python
from openapi_client.models.referenced_public_ip_address import ReferencedPublicIpAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedPublicIpAddress from a JSON string
referenced_public_ip_address_instance = ReferencedPublicIpAddress.from_json(json)
# print the JSON string representation of the object
print(ReferencedPublicIpAddress.to_json())

# convert the object into a dict
referenced_public_ip_address_dict = referenced_public_ip_address_instance.to_dict()
# create an instance of ReferencedPublicIpAddress from a dict
referenced_public_ip_address_from_dict = ReferencedPublicIpAddress.from_dict(referenced_public_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


