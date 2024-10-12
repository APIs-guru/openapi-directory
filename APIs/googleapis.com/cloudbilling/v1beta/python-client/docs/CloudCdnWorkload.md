# CloudCdnWorkload

Specifies usage for Cloud CDN resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_fill_origin_service** | **str** | The source service for the cache fill. | [optional] 
**cache_fill_rate** | [**Usage**](Usage.md) |  | [optional] 
**cache_fill_regions** | [**CacheFillRegions**](CacheFillRegions.md) |  | [optional] 
**cache_look_up_rate** | [**Usage**](Usage.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_cdn_workload import CloudCdnWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of CloudCdnWorkload from a JSON string
cloud_cdn_workload_instance = CloudCdnWorkload.from_json(json)
# print the JSON string representation of the object
print(CloudCdnWorkload.to_json())

# convert the object into a dict
cloud_cdn_workload_dict = cloud_cdn_workload_instance.to_dict()
# create an instance of CloudCdnWorkload from a dict
cloud_cdn_workload_from_dict = CloudCdnWorkload.from_dict(cloud_cdn_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


