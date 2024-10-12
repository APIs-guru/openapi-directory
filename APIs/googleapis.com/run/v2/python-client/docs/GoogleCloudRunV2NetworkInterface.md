# GoogleCloudRunV2NetworkInterface

Direct VPC egress settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be looked up from the subnetwork. | [optional] 
**subnetwork** | **str** | The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the subnetwork with the same name with the network will be used. | [optional] 
**tags** | **List[str]** | Network tags applied to this Cloud Run resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_network_interface import GoogleCloudRunV2NetworkInterface

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2NetworkInterface from a JSON string
google_cloud_run_v2_network_interface_instance = GoogleCloudRunV2NetworkInterface.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2NetworkInterface.to_json())

# convert the object into a dict
google_cloud_run_v2_network_interface_dict = google_cloud_run_v2_network_interface_instance.to_dict()
# create an instance of GoogleCloudRunV2NetworkInterface from a dict
google_cloud_run_v2_network_interface_from_dict = GoogleCloudRunV2NetworkInterface.from_dict(google_cloud_run_v2_network_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


