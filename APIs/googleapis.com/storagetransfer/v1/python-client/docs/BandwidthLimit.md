# BandwidthLimit

Specifies a bandwidth limit for an agent pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_mbps** | **str** | Bandwidth rate in megabytes per second, distributed across all the agents in the pool. | [optional] 

## Example

```python
from openapi_client.models.bandwidth_limit import BandwidthLimit

# TODO update the JSON string below
json = "{}"
# create an instance of BandwidthLimit from a JSON string
bandwidth_limit_instance = BandwidthLimit.from_json(json)
# print the JSON string representation of the object
print(BandwidthLimit.to_json())

# convert the object into a dict
bandwidth_limit_dict = bandwidth_limit_instance.to_dict()
# create an instance of BandwidthLimit from a dict
bandwidth_limit_from_dict = BandwidthLimit.from_dict(bandwidth_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


