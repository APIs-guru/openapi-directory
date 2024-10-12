# UsageNetworkStreamTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_targets** | [**ArrayOfStreamTargets**](ArrayOfStreamTargets.md) |  | [optional] 
**total** | [**HashOfTotals**](HashOfTotals.md) |  | [optional] 

## Example

```python
from openapi_client.models.usage_network_stream_target import UsageNetworkStreamTarget

# TODO update the JSON string below
json = "{}"
# create an instance of UsageNetworkStreamTarget from a JSON string
usage_network_stream_target_instance = UsageNetworkStreamTarget.from_json(json)
# print the JSON string representation of the object
print(UsageNetworkStreamTarget.to_json())

# convert the object into a dict
usage_network_stream_target_dict = usage_network_stream_target_instance.to_dict()
# create an instance of UsageNetworkStreamTarget from a dict
usage_network_stream_target_from_dict = UsageNetworkStreamTarget.from_dict(usage_network_stream_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


