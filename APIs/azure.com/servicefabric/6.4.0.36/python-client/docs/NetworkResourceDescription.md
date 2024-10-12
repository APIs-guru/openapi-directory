# NetworkResourceDescription

This type describes a network resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Network resource. | 
**properties** | [**NetworkResourceProperties**](NetworkResourceProperties.md) |  | 

## Example

```python
from openapi_client.models.network_resource_description import NetworkResourceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkResourceDescription from a JSON string
network_resource_description_instance = NetworkResourceDescription.from_json(json)
# print the JSON string representation of the object
print(NetworkResourceDescription.to_json())

# convert the object into a dict
network_resource_description_dict = network_resource_description_instance.to_dict()
# create an instance of NetworkResourceDescription from a dict
network_resource_description_from_dict = NetworkResourceDescription.from_dict(network_resource_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


