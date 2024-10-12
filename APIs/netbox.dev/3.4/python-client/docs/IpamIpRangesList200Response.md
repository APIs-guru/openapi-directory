# IpamIpRangesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[IPRange]**](IPRange.md) |  | 

## Example

```python
from openapi_client.models.ipam_ip_ranges_list200_response import IpamIpRangesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IpamIpRangesList200Response from a JSON string
ipam_ip_ranges_list200_response_instance = IpamIpRangesList200Response.from_json(json)
# print the JSON string representation of the object
print(IpamIpRangesList200Response.to_json())

# convert the object into a dict
ipam_ip_ranges_list200_response_dict = ipam_ip_ranges_list200_response_instance.to_dict()
# create an instance of IpamIpRangesList200Response from a dict
ipam_ip_ranges_list200_response_from_dict = IpamIpRangesList200Response.from_dict(ipam_ip_ranges_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


