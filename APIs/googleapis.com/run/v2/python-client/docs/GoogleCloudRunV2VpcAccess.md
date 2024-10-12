# GoogleCloudRunV2VpcAccess

VPC Access settings. For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector** | **str** | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. For more information on sending traffic to a VPC network via a connector, visit https://cloud.google.com/run/docs/configuring/vpc-connectors. | [optional] 
**egress** | **str** | Traffic VPC egress settings. If not provided, it defaults to PRIVATE_RANGES_ONLY. | [optional] 
**network_interfaces** | [**List[GoogleCloudRunV2NetworkInterface]**](GoogleCloudRunV2NetworkInterface.md) | Direct VPC egress settings. Currently only single network interface is supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_vpc_access import GoogleCloudRunV2VpcAccess

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2VpcAccess from a JSON string
google_cloud_run_v2_vpc_access_instance = GoogleCloudRunV2VpcAccess.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2VpcAccess.to_json())

# convert the object into a dict
google_cloud_run_v2_vpc_access_dict = google_cloud_run_v2_vpc_access_instance.to_dict()
# create an instance of GoogleCloudRunV2VpcAccess from a dict
google_cloud_run_v2_vpc_access_from_dict = GoogleCloudRunV2VpcAccess.from_dict(google_cloud_run_v2_vpc_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


