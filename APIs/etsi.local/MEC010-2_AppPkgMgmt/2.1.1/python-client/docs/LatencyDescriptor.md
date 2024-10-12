# LatencyDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_latency** | **int** | The value of the maximum latency in nano seconds tolerated by the MEC application. See note. | 

## Example

```python
from openapi_client.models.latency_descriptor import LatencyDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of LatencyDescriptor from a JSON string
latency_descriptor_instance = LatencyDescriptor.from_json(json)
# print the JSON string representation of the object
print(LatencyDescriptor.to_json())

# convert the object into a dict
latency_descriptor_dict = latency_descriptor_instance.to_dict()
# create an instance of LatencyDescriptor from a dict
latency_descriptor_from_dict = LatencyDescriptor.from_dict(latency_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


