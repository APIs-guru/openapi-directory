# PrivateConnectivity

Private Connectivity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_connection** | **str** | Required. The resource name (URI) of the private connection. | [optional] 

## Example

```python
from openapi_client.models.private_connectivity import PrivateConnectivity

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateConnectivity from a JSON string
private_connectivity_instance = PrivateConnectivity.from_json(json)
# print the JSON string representation of the object
print(PrivateConnectivity.to_json())

# convert the object into a dict
private_connectivity_dict = private_connectivity_instance.to_dict()
# create an instance of PrivateConnectivity from a dict
private_connectivity_from_dict = PrivateConnectivity.from_dict(private_connectivity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


