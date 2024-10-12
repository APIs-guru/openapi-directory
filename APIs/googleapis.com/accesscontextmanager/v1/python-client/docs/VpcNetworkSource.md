# VpcNetworkSource

The originating network source in Google Cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpc_subnetwork** | [**VpcSubNetwork**](VpcSubNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.vpc_network_source import VpcNetworkSource

# TODO update the JSON string below
json = "{}"
# create an instance of VpcNetworkSource from a JSON string
vpc_network_source_instance = VpcNetworkSource.from_json(json)
# print the JSON string representation of the object
print(VpcNetworkSource.to_json())

# convert the object into a dict
vpc_network_source_dict = vpc_network_source_instance.to_dict()
# create an instance of VpcNetworkSource from a dict
vpc_network_source_from_dict = VpcNetworkSource.from_dict(vpc_network_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


