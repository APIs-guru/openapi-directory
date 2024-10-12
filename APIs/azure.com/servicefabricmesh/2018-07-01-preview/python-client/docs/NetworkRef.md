# NetworkRef

Describes a network reference in a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the network. | [optional] 

## Example

```python
from openapi_client.models.network_ref import NetworkRef

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkRef from a JSON string
network_ref_instance = NetworkRef.from_json(json)
# print the JSON string representation of the object
print(NetworkRef.to_json())

# convert the object into a dict
network_ref_dict = network_ref_instance.to_dict()
# create an instance of NetworkRef from a dict
network_ref_from_dict = NetworkRef.from_dict(network_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


