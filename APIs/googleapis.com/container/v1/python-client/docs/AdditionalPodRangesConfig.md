# AdditionalPodRangesConfig

AdditionalPodRangesConfig is the configuration for additional pod secondary ranges supporting the ClusterUpdate message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pod_range_info** | [**List[RangeInfo]**](RangeInfo.md) | Output only. [Output only] Information for additional pod range. | [optional] [readonly] 
**pod_range_names** | **List[str]** | Name for pod secondary ipv4 range which has the actual range defined ahead. | [optional] 

## Example

```python
from openapi_client.models.additional_pod_ranges_config import AdditionalPodRangesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalPodRangesConfig from a JSON string
additional_pod_ranges_config_instance = AdditionalPodRangesConfig.from_json(json)
# print the JSON string representation of the object
print(AdditionalPodRangesConfig.to_json())

# convert the object into a dict
additional_pod_ranges_config_dict = additional_pod_ranges_config_instance.to_dict()
# create an instance of AdditionalPodRangesConfig from a dict
additional_pod_ranges_config_from_dict = AdditionalPodRangesConfig.from_dict(additional_pod_ranges_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


