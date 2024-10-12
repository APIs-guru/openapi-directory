# GoogleCloudServicenetworkingV1ConsumerConfigReservedRange

Allocated IP address ranges for this private service access connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The starting address of the reserved range. The address must be a valid IPv4 address in the x.x.x.x format. This value combined with the IP prefix length is the CIDR range for the reserved range. | [optional] 
**ip_prefix_length** | **int** | The prefix length of the reserved range. | [optional] 
**name** | **str** | The name of the reserved range. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicenetworking_v1_consumer_config_reserved_range import GoogleCloudServicenetworkingV1ConsumerConfigReservedRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicenetworkingV1ConsumerConfigReservedRange from a JSON string
google_cloud_servicenetworking_v1_consumer_config_reserved_range_instance = GoogleCloudServicenetworkingV1ConsumerConfigReservedRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicenetworkingV1ConsumerConfigReservedRange.to_json())

# convert the object into a dict
google_cloud_servicenetworking_v1_consumer_config_reserved_range_dict = google_cloud_servicenetworking_v1_consumer_config_reserved_range_instance.to_dict()
# create an instance of GoogleCloudServicenetworkingV1ConsumerConfigReservedRange from a dict
google_cloud_servicenetworking_v1_consumer_config_reserved_range_from_dict = GoogleCloudServicenetworkingV1ConsumerConfigReservedRange.from_dict(google_cloud_servicenetworking_v1_consumer_config_reserved_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


