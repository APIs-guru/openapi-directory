# PrivateEndpointProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id of the private endpoint. | [optional] 

## Example

```python
from openapi_client.models.private_endpoint_property import PrivateEndpointProperty

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateEndpointProperty from a JSON string
private_endpoint_property_instance = PrivateEndpointProperty.from_json(json)
# print the JSON string representation of the object
print(PrivateEndpointProperty.to_json())

# convert the object into a dict
private_endpoint_property_dict = private_endpoint_property_instance.to_dict()
# create an instance of PrivateEndpointProperty from a dict
private_endpoint_property_from_dict = PrivateEndpointProperty.from_dict(private_endpoint_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


