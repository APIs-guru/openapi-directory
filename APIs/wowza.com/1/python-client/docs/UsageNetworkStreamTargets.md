# UsageNetworkStreamTargets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_targets** | [**ArrayOfStreamTargets**](ArrayOfStreamTargets.md) |  | [optional] 
**total** | [**HashOfTotals**](HashOfTotals.md) |  | [optional] 

## Example

```python
from openapi_client.models.usage_network_stream_targets import UsageNetworkStreamTargets

# TODO update the JSON string below
json = "{}"
# create an instance of UsageNetworkStreamTargets from a JSON string
usage_network_stream_targets_instance = UsageNetworkStreamTargets.from_json(json)
# print the JSON string representation of the object
print(UsageNetworkStreamTargets.to_json())

# convert the object into a dict
usage_network_stream_targets_dict = usage_network_stream_targets_instance.to_dict()
# create an instance of UsageNetworkStreamTargets from a dict
usage_network_stream_targets_from_dict = UsageNetworkStreamTargets.from_dict(usage_network_stream_targets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


