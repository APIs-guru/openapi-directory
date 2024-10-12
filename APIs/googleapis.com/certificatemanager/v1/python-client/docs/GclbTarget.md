# GclbTarget

Describes a Target Proxy that uses this Certificate Map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_configs** | [**List[IpConfig]**](IpConfig.md) | Output only. IP configurations for this Target Proxy where the Certificate Map is serving. | [optional] [readonly] 
**target_https_proxy** | **str** | Output only. This field returns the resource name in the following format: &#x60;//compute.googleapis.com/projects/*/global/targetHttpsProxies/*&#x60;. | [optional] [readonly] 
**target_ssl_proxy** | **str** | Output only. This field returns the resource name in the following format: &#x60;//compute.googleapis.com/projects/*/global/targetSslProxies/*&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gclb_target import GclbTarget

# TODO update the JSON string below
json = "{}"
# create an instance of GclbTarget from a JSON string
gclb_target_instance = GclbTarget.from_json(json)
# print the JSON string representation of the object
print(GclbTarget.to_json())

# convert the object into a dict
gclb_target_dict = gclb_target_instance.to_dict()
# create an instance of GclbTarget from a dict
gclb_target_from_dict = GclbTarget.from_dict(gclb_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


