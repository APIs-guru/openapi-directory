# Capacity

The throughput capacity configuration for each partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publish_mib_per_sec** | **int** | Publish throughput capacity per partition in MiB/s. Must be &gt;&#x3D; 4 and &lt;&#x3D; 16. | [optional] 
**subscribe_mib_per_sec** | **int** | Subscribe throughput capacity per partition in MiB/s. Must be &gt;&#x3D; 4 and &lt;&#x3D; 32. | [optional] 

## Example

```python
from openapi_client.models.capacity import Capacity

# TODO update the JSON string below
json = "{}"
# create an instance of Capacity from a JSON string
capacity_instance = Capacity.from_json(json)
# print the JSON string representation of the object
print(Capacity.to_json())

# convert the object into a dict
capacity_dict = capacity_instance.to_dict()
# create an instance of Capacity from a dict
capacity_from_dict = Capacity.from_dict(capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


