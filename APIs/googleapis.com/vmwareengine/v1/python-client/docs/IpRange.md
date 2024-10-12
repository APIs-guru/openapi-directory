# IpRange

An IP range provided in any one of the supported formats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_address** | **str** | The name of an &#x60;ExternalAddress&#x60; resource. The external address must have been reserved in the scope of this external access rule&#39;s parent network policy. Provide the external address name in the form of &#x60;projects/{project}/locations/{location}/privateClouds/{private_cloud}/externalAddresses/{external_address}&#x60;. For example: &#x60;projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address&#x60;. | [optional] 
**ip_address** | **str** | A single IP address. For example: &#x60;10.0.0.5&#x60;. | [optional] 
**ip_address_range** | **str** | An IP address range in the CIDR format. For example: &#x60;10.0.0.0/24&#x60;. | [optional] 

## Example

```python
from openapi_client.models.ip_range import IpRange

# TODO update the JSON string below
json = "{}"
# create an instance of IpRange from a JSON string
ip_range_instance = IpRange.from_json(json)
# print the JSON string representation of the object
print(IpRange.to_json())

# convert the object into a dict
ip_range_dict = ip_range_instance.to_dict()
# create an instance of IpRange from a dict
ip_range_from_dict = IpRange.from_dict(ip_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


