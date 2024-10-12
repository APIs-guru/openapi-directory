# CloudCdnEgressWorkload

Specifies usage for Cloud CDN Data Transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_egress_destination** | **str** | The destination for the cache data transfer. | [optional] 
**cache_egress_rate** | [**Usage**](Usage.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_cdn_egress_workload import CloudCdnEgressWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of CloudCdnEgressWorkload from a JSON string
cloud_cdn_egress_workload_instance = CloudCdnEgressWorkload.from_json(json)
# print the JSON string representation of the object
print(CloudCdnEgressWorkload.to_json())

# convert the object into a dict
cloud_cdn_egress_workload_dict = cloud_cdn_egress_workload_instance.to_dict()
# create an instance of CloudCdnEgressWorkload from a dict
cloud_cdn_egress_workload_from_dict = CloudCdnEgressWorkload.from_dict(cloud_cdn_egress_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


