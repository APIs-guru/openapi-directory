# MaxSizeRangeCapability

The maximum size range capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_size** | [**LogSizeCapability**](LogSizeCapability.md) |  | [optional] 
**max_value** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**min_value** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**scale_size** | [**MaxSizeCapability**](MaxSizeCapability.md) |  | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.max_size_range_capability import MaxSizeRangeCapability

# TODO update the JSON string below
json = "{}"
# create an instance of MaxSizeRangeCapability from a JSON string
max_size_range_capability_instance = MaxSizeRangeCapability.from_json(json)
# print the JSON string representation of the object
print(MaxSizeRangeCapability.to_json())

# convert the object into a dict
max_size_range_capability_dict = max_size_range_capability_instance.to_dict()
# create an instance of MaxSizeRangeCapability from a dict
max_size_range_capability_from_dict = MaxSizeRangeCapability.from_dict(max_size_range_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


