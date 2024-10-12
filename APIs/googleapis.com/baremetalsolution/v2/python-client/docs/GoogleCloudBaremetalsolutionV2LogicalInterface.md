# GoogleCloudBaremetalsolutionV2LogicalInterface

Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interface_index** | **int** | The index of the logical interface mapping to the index of the hardware bond or nic on the chosen network template. This field is deprecated. | [optional] 
**logical_network_interfaces** | [**List[LogicalNetworkInterface]**](LogicalNetworkInterface.md) | List of logical network interfaces within a logical interface. | [optional] 
**name** | **str** | Interface name. This is of syntax or and forms part of the network template name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_baremetalsolution_v2_logical_interface import GoogleCloudBaremetalsolutionV2LogicalInterface

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBaremetalsolutionV2LogicalInterface from a JSON string
google_cloud_baremetalsolution_v2_logical_interface_instance = GoogleCloudBaremetalsolutionV2LogicalInterface.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBaremetalsolutionV2LogicalInterface.to_json())

# convert the object into a dict
google_cloud_baremetalsolution_v2_logical_interface_dict = google_cloud_baremetalsolution_v2_logical_interface_instance.to_dict()
# create an instance of GoogleCloudBaremetalsolutionV2LogicalInterface from a dict
google_cloud_baremetalsolution_v2_logical_interface_from_dict = GoogleCloudBaremetalsolutionV2LogicalInterface.from_dict(google_cloud_baremetalsolution_v2_logical_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


